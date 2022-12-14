import requests
from bs4 import BeautifulSoup
import csv

targetURL = 'https://www.mizuhobank.co.jp/retail/takarakuji/check/loto/backnumber/loto60001.html'
exportDirectory = 'C:/test.csv'

res = requests.get(targetURL)
soup = BeautifulSoup(res.text, 'html.parser')

s = soup.select('td')
lis = [[''] * 8 for _ in range(20)]

cnt = 0
for i in range(20):
    for j in range(8):
        lis[i][j] = s[cnt].get_text()
        cnt += 1

with open(exportDirectory, 'w', encoding='UTF-8') as f:
    writer = csv.writer(f)
    writer.writerows(lis)

