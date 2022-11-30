import numpy as np
import pandas as pd
from apriori import apriori

# 第一次扫描
df = pd.read_csv("dataset.txt", encoding="gbk", sep="\t")
# 获取数据列名
columns = df.columns[1:df.shape[1]]
# 处理后的数据，只有数据“项”
goods_set = np.array(df[columns])
# 清理“项”中的数据
item_list = []
for item in goods_set:
    # 除去空格，并且将字符串以逗号将各个字符隔开顺序存入数组中
    item = sorted(item[0].replace(" ", "").split(","))
    # 将处理后的每行数据添加到项集数组中
    item_list.append(item)

print(apriori(item_list, 0.2))
