import requests
from bs4 import BeautifulSoup
import csv


def makenewURL(url):
    num = int(url[-10:-5])
    num += 20
    newURL = url[:-10] + str(num) + url[-5:]
    return newURL


def getdata(url):
    res = requests.get(url)
    soup = BeautifulSoup(res.text, 'html.parser')
    s = soup.select('td')
    lis = [[''] * 8 for _ in range(20)]

    cnt = 0
    for i in range(20):
        for j in range(8):
            lis[i][j] = s[cnt].get_text()
            cnt += 1
    return lis


def exportCSV(dataList):
    exportDirectory = 'C:/test.csv'
    with open(exportDirectory, 'w', encoding='UTF-8') as f:
        writer = csv.writer(f)
        writer.writerows(dataList)
    return


targetURL = 'https://www.mizuhobank.co.jp/retail/takarakuji/check/loto/backnumber/loto60001.html'

for _ in range(22):  # 60441まで。60661からは別の方法で…
    targetURL = makenewURL(targetURL)
    # currentDataList = getdata(targetURL)
    # exportCSV(currentDataList)
    print(targetURL)
