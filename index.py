import config
import requests
key = config.ALPHA_API_KEY
output = 40
index = 0
stock_data= requests.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey=%s',key)
stock_data = data.json()
adjusted_stock_prices = []
stock_data = stock_data["Monthly Adjusted Time Series"]
for index,row in enumerate(stock_data):
    if(index > output):
        break
    adjusted_stock_prices.append(stock_data[row]["5. adjusted close"])
print(adjusted_stock_prices)
print(len(adjusted_stock_prices))