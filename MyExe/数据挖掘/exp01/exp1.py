import sys
import easygui as gui
from zhouyanan import readfile, remove_place, get_conditions, NoneException

try:
    df = readfile()
    txt = df.data
    columns = txt.shape[1]
    col = txt.columns[1:columns]
    parameters = txt[col]
    good_num_y = parameters["好瓜"].value_counts()["是"]
    good_num_n = parameters["好瓜"].value_counts()["否"]
    p_y = parameters["好瓜"].value_counts(normalize=True)["是"]
    p_n = parameters["好瓜"].value_counts(normalize=True)["否"]
    
    try:
        conditions = get_conditions(txt)
    except NoneException as e:
        print(e)
        sys.exit(0)

    # 判断条件是否符合要求
    j = 0
    # 临时变量
    yes = 1
    no = 1
    # 使用双层遍历获取各个属性下指定类别的概率
    for i in col[: columns - 2]:
        while j < len(conditions):
            # 满足各个条件为好瓜的数量
            condition_num_y = parameters[(parameters["好瓜"] == "是") & (parameters[i] == conditions[j])].shape[0]
            # 满足各个条件不是好瓜的数量
            condition_num_n = parameters[(parameters["好瓜"] == "否") & (parameters[i] == conditions[j])].shape[0]
            # 使用累乘获取是好瓜的概率
            yes = yes * (condition_num_y / good_num_y)
            # 使用累乘获取不是好瓜的概率
            no = no * (condition_num_n / good_num_n)
            j = j + 1
            # 这里必须添加break，内层循环只需要循环一次
            break
    # 结果是好瓜的概率
    yes = yes * p_y
    # 结果不是好瓜的概率
    no = no * p_n
    yes_msg = "此瓜是好瓜的概率为:" + str(yes) + "\n此瓜不是好瓜的概率为:" + str(no) + "\n所以条件为：" + ",".join(conditions) + "是好瓜"
    no_msg = "此瓜是好瓜的概率为:" + str(yes) + "\n此瓜不是好瓜的概率为:" + str(no) + "\n所以条件为：" + ",".join(conditions) + "不是好瓜"


    if yes > no:
        gui.msgbox(msg=yes_msg, title="结果", ok_button="确认")
    else:
        gui.msgbox(msg=no_msg, title="结果", ok_button="确认")
except KeyError:
    print(remove_place(df.path))
# 好瓜、不好的瓜分别是多少
parameters = txt[col]
good_num_y = parameters["好瓜"].value_counts()["是"]
good_num_n = parameters["好瓜"].value_counts()["否"]
# 好瓜的概率
p_y = parameters["好瓜"].value_counts(normalize=True)["是"]
p_n = parameters["好瓜"].value_counts(normalize=True)["否"]
# good_list_num = good.values.tolist().count()
# isGood_no = np.sum(isGood is "是")
# 色泽
color_num_y = parameters[(parameters["好瓜"] == "是") & (parameters["色泽"] == "青绿")].shape[0]
color_num_n = parameters[(parameters["好瓜"] == "否") & (parameters["色泽"] == "青绿")].shape[0]
text = parameters[(parameters["好瓜"] == "是")]
# color_ = pd.Series(color_)
# 色泽为青绿是好瓜的概率
p_color_y = color_num_y / good_num_y
# 色泽为青绿不是好瓜的概率
p_color_n = color_num_n / good_num_n
# 根蒂
root_num_y = parameters[(parameters["好瓜"] == "是") & (parameters["根蒂"] == "稍蜷")].shape[0]
root_num_n = parameters[(parameters["好瓜"] == "否") & (parameters["根蒂"] == "稍蜷")].shape[0]
# 根蒂为稍蜷是好瓜的概率
p_root_y = root_num_y / good_num_y
# 根蒂为稍蜷不是好瓜的概率
p_root_n = root_num_n / good_num_n
# 敲声
stroke_num_y = parameters[(parameters["好瓜"] == "是") & (parameters["敲声"] == "浊响")].shape[0]
stroke_num_n = parameters[(parameters["好瓜"] == "否") & (parameters["敲声"] == "浊响")].shape[0]
# 敲声为浊响是好瓜的概率
p_stroke_y = stroke_num_y / good_num_y
# 敲声为浊响不是好瓜的概率
p_stroke_n = stroke_num_n / good_num_n
# 纹理
texture_num_y = parameters[(parameters["好瓜"] == "是") & (parameters["纹理"] == "清晰")].shape[0]
texture_num_n = parameters[(parameters["好瓜"] == "否") & (parameters["纹理"] == "清晰")].shape[0]
# 纹理为清晰是好瓜的概率
p_texture_y = texture_num_y / good_num_y
# 纹理为清晰不是好瓜的概率
p_texture_n = texture_num_n / good_num_n
# 脐部
umbilical_num_y = parameters[(parameters["好瓜"] == "是") & (parameters["脐部"] == "凹陷")].shape[0]
umbilical_num_n = parameters[(parameters["好瓜"] == "否") & (parameters["脐部"] == "凹陷")].shape[0]
# 脐部为凹陷是好瓜的概率
p_umbilical_y = umbilical_num_y / good_num_y
# 脐部为凹陷不是好瓜的概率
p_umbilical_n = umbilical_num_n / good_num_n
# 触感
touch_num_y = parameters[(parameters["好瓜"] == "是") & (parameters["触感"] == "硬滑")].shape[0]
touch_num_n = parameters[(parameters["好瓜"] == "否") & (parameters["触感"] == "硬滑")].shape[0]
# 触感为硬滑是好瓜的概率
p_touch_y = touch_num_y / good_num_y
# 触感为硬化不是好瓜的概率
p_touch_n = touch_num_n / good_num_n

zhouyanan.py:
import os
import time
import easygui as gui
import pandas as pd
import numpy as np
import tkinter as tk
from tkinter import filedialog

class ZcData(object):
    def __init__(self, data, path):
        self.data = data
        self.path = path
def readfile():
    """
    读取文件
    param select_path:文件路径
    return: 根据文件类型，返回数据
    """
    # 开启选择文件窗口
    root = tk.Tk()
    root.withdraw()
    # 获取选择好的文件
    select_path = filedialog.askopenfilename()
    # 获取文件类型（后缀）
    file_type = os.path.splitext(select_path)[1]
    if file_type == ".csv" or file_type == ".txt":
        data = pd.read_csv(select_path, encoding="utf-8")
        res = ZcData(data, select_path)
        return res
    elif file_type == ".excel":
        return pd.read_excel(select_path)
    else:
        return "该文件类型暂时无法读取"
def remove_place(path):
    """
    去除文件中的空格
    Parameters
    ----------
    path : 选择的文件路劲
    Returns
    -------
    new_path : 重新生成的文件路径，基于你所选择的文件位置
    """
    # 获取文件路径
    out_path = path.rsplit("/", 1)[0]
    # 获取文件类型
    file_type = os.path.splitext(path)[1]
    f = open(path, 'r+', encoding='utf-8')
    new_f = open(out_path + "/" + time.strftime('%Y%m%d', time.localtime(time.time())) + file_type, 'w',
                 encoding='utf8')
    for line in f.readlines():
        new_str = line.replace(" ", "")
        new_f.write(new_str)
    f.close()
    new_f.close()
    # 使用字符串拼接获取新文件路径
    new_path = out_path + "/" + time.strftime('%Y%m%d', time.localtime(time.time())) + file_type
    print("由于选择的文件数据存在脏数据,现已重新为您生成与您选择文件数据一致的文件，路径为：")
    return new_path
class NoneException(Exception):
    pass
def get_conditions(read_file):
    # 获取列数
    columns = read_file.shape[1]
    # 算好瓜与坏瓜的概率
    col = read_file.columns[1:columns]

    # 好瓜、不好的瓜分别是多少
    parameters = read_file[col]
    conditions = {}
    # 使用字典的形式存入各个类别
    for i in col[: columns - 2]:
        conditions[i] = np.unique(parameters[i].values)
    # 获取所有元素下标
    index = conditions.keys()
    # 存入用户选择的类别
    temp = []
    j = 0
    for i in index:
        while j < len(conditions[i]):
            temp.append(gui.choicebox(msg=i, choices=conditions[i], title="请选择特征"))
            break
    for t in range(len(temp)):
        if temp[t] is None:
            raise NoneException("条件存在漏选，无法分析结果。")
        else:
            return temp