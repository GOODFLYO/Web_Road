import time
import pyautogui
import cv2

"""
1.判断是否有kill，有的话就打，无则2，间隔10s
2.返回并且确认
3.判断是否有探索，有就点击，再触发3
"""

def get_xy(img_model_path):
    """
    :param 识别的图片坐标位置
    :return 以元组的形式返回检测到的区域中心坐标
    """

    # 保存的屏幕截图名字
    sst = "./pic/screenshot.png"

    # 屏幕截图保存
    # pyautogui.screenshot(region=(0,0,930,525)).save(sst)
    pyautogui.screenshot().save(sst)
    # 载入截图
    img = cv2.imread(sst)

    # 图像模板,我需要识别的图像按钮
    img_terminal = cv2.imread(img_model_path)
    # 读取模板的高度宽度和通道数
    height, width, channel = img_terminal.shape
    # 使用matchTemplate进行模板匹配（标准平方差匹配）
    result = cv2.matchTemplate(img, img_terminal, cv2.TM_SQDIFF_NORMED)
    # 解析出匹配区域的左上角图标
    upper_left = cv2.minMaxLoc(result)[2]
    # 计算出匹配区域右下角图标（左上角坐标加上模板的长宽即可得到）
    lower_right = (upper_left[0] + width, upper_left[1] + height)
    # 计算坐标的平均值并将其返回
    avg = (int((upper_left[0] + lower_right[0]) / 2), int((upper_left[1] + lower_right[1]) / 2))
    return avg


def auto_Click(var_avg):
    """
    输入一个元组，自动点击
    :param var_avg: 坐标元组
    :return: None
    """
    pyautogui.click(var_avg[0], var_avg[1], button='left')
    pyautogui.click()
    time.sleep(2)
 
#  运行上面俩函数
def routine(img_model_path, name):
    avg = get_xy(img_model_path)
    print(f"正在点击{name}")
    auto_Click(avg)
 
while 1:
    for x in range(1):
        routine("./kill.png","击杀")
        print("向右滑动")
        pyautogui.dragRel(-100,0,duration=1.5, button='left')
        time.sleep(6)
    for y in range(2):
        routine("./tansuo.png","探索")
        routine("./return.png","返回")
        routine("./yes.png","确认")
    print("-----------\n")

 




# def click_part1():
#     """
#     1.点击主屏幕的"终端"二字
#     2.点击终端中的"主题曲"图标
#     3.点击主题曲中的"HOUR OF AN AWAKENING"字样
#     4.点击"黑暗时代"字样
#     5.向右拖动鼠标
#     :return:
#     """
#     # 点击终端
#     routine("./pic/terminal.png", "主界面终端")
#     # 点击主题曲
#     routine("./pic/theme.png", "主题曲")
#     # 点击HOUR OF....字样
#     routine("./pic/hour_of_an_awakening.png", 'HOUR OF ...字样')
#     # 点击黑暗时代
#     routine("./pic/evil_time.png", '黑暗时代')
 
 
# def click_part2(times):
#     """
#     6.点击"1-7"
#     7.点击"代理指挥"
#     8.点击"开始行动"
#     9.点击作战页的"开始行动"
#     10.作战结束后点击"行动结束"
#     11.重复第6项至第10项
#     可循环操作
#     :param times:循环次数
#     :return: None
#     """
#     for i in range(times):
#         time.sleep(1)
#         # 点击1-7 注意要先让模拟器记忆1-7
#         routine("./pic/1-7.png", "1-7")
#         # 点击代理指挥
#         routine("./pic/PRTS.png", '代理指挥')
#         # 点击开始行动
#         routine("./pic/start-1.png", '开始行动')
#         # 点击作战页的开始行动
#         routine("./pic/start-2.png", "作战页的开始行动")
#         # 等待行动结束
#         time.sleep(90)
#         # 点击结算页面退出
#         routine("./pic/operation_over.png", '结算页面的行动结束')
#         # 因为黑屏比较长，设置较长时间的睡眠
#         time.sleep(3)
 
 
# click_part1()
# click_part2(2)
