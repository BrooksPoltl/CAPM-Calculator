import config
key = config.ALPHA_API_KEY
import csv
from alpha_vantage.timeseries import TimeSeries
import matplotlib.pyplot as plt


ts = TimeSeries(key=key, output_format='csv')
data, meta_data = ts.get_intraday(symbol='MSFT',interval='1min', outputsize='full')
print(data)
#whoops
for row in data:
    print(row)