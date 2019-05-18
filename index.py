import config
import requests
key = config.ALPHA_API_KEY
output = 40
change_index = 0
stock_data= requests.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey=%s',key)
index_data = requests.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=spy&apikey=%s',key)
stock_data = stock_data.json()
index_data = index_data.json()
if('Note' in stock_data or 'Note' in index_data):
    print("please wait api limit reached")
    exit()
adjusted_stock_prices = []
adjusted_stock_change = []
adjusted_index_prices = []
adjusted_index_change = []
stock_data = stock_data["Monthly Adjusted Time Series"]
index_data = index_data["Monthly Adjusted Time Series"]
for index,row in enumerate(stock_data):
    if(index > output):
        break
    adjusted_stock_prices.append(stock_data[row]["5. adjusted close"])
for index,row in enumerate(index_data):
    if(index > output):
        break
    adjusted_index_prices.append(index_data[row]["5. adjusted close"])
print(adjusted_index_change)
while change_index < output:
    print(change_index)
    stock_percent_change = (float(adjusted_stock_prices[change_index]) - float(adjusted_stock_prices[change_index+1]))/float(adjusted_stock_prices[change_index+1])
    index_percent_change = (float(adjusted_index_prices[change_index]) - float(adjusted_index_prices[change_index+1]))/float(adjusted_index_prices[change_index+1])
    adjusted_stock_change.append(stock_percent_change)
    adjusted_index_change.append(index_percent_change)
    change_index+=1
print(adjusted_index_change)
print(len(adjusted_index_change))
print(adjusted_stock_change)
print(len(adjusted_stock_change))