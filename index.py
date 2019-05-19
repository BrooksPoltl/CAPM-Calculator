import config
import requests
from scipy import stats
key = config.ALPHA_API_KEY
quandl_key = config.QUANDL_API_KEY
output = 40
change_index = 0
#api calls
risk_free_data = requests.get('https://www.quandl.com/api/v3/datasets/FRED/DGS10.json?api_key=%s&collapse=monthly' % quandl_key)
stock_data= requests.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey=%s' % key)
index_data = requests.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=spy&apikey=%s' % key)

#Converting to JSON
risk_free_data = risk_free_data.json()
stock_data = stock_data.json()
index_data = index_data.json()

#testing if limit is reached
if(('Note' in stock_data) or ('Note' in index_data)):
    print("please wait api limit reached")
    exit()

#variable declarations to push data into
adjusted_stock_prices = []
adjusted_stock_change = []
adjusted_index_prices = []
adjusted_index_change = []
adjusted_risk_free_prices = []

#sorting out unneeded data
stock_data = stock_data["Monthly Adjusted Time Series"]
index_data = index_data["Monthly Adjusted Time Series"]
risk_free_data = risk_free_data["dataset"]["data"]

#pushing data into variables to sort out unneeded data from api calls
for index,row in enumerate(stock_data):
    if(index > output):
        break
    adjusted_stock_prices.append(stock_data[row]["5. adjusted close"])

for index,row in enumerate(index_data):
    if(index > output):
        break
    adjusted_index_prices.append(index_data[row]["5. adjusted close"])

for index, row in enumerate(risk_free_data):
    if(index>=output):
        break
    monthly = (row[1]/100)/12
    adjusted_risk_free_prices.append(monthly)

#finding the percent change to get ready for regression
while change_index < output:
    stock_percent_change = (float(adjusted_stock_prices[change_index]) - float(adjusted_stock_prices[change_index+1]))/float(adjusted_stock_prices[change_index+1])
    index_percent_change = (float(adjusted_index_prices[change_index]) - float(adjusted_index_prices[change_index+1]))/float(adjusted_index_prices[change_index+1])
    adjusted_stock_change.append(stock_percent_change)
    adjusted_index_change.append(index_percent_change)
    change_index+=1

#finding excess return on the market
excess_index_change = []
excess_stock_change = []

for i in range(0,output):
    index_diff = adjusted_index_change[i] - adjusted_risk_free_prices[i]
    stock_diff = adjusted_stock_change[i] - adjusted_risk_free_prices[i]
    excess_index_change.append(index_diff)
    excess_stock_change.append(stock_diff)

#regression
slope, intercept, r_value, p_value, std_err = stats.linregress(excess_index_change, excess_stock_change)
print(slope, intercept)
average_risk_free_rate = (sum(adjusted_risk_free_prices)* 12)/output
average_market_risk_premium = (sum(excess_index_change)* 12)/output
CAPM = average_risk_free_rate + (slope*average_market_risk_premium)

print(CAPM)