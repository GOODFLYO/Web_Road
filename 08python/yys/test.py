import cv2
import pyautogui
import time

pyautogui.moveTo(500,400,duration=2)
pyautogui.click()

#get screen size
size = pyautogui.size()
print(size)
print(pyautogui.position())

# wait 5s
# time.sleep(5)    

#get tansuo position
tansuo_pos = pyautogui.locateOnScreen('tansuo.png')
print(tansuo_pos)
print(pyautogui.center(100,100))

#move mouse to the position
pyautogui.moveTo(pyautogui.center(tansuo_pos),duration=2)
#click
pyautogui.click()


#get kill position
kill_pos = pyautogui.locateOnScreen('kill.png')
print(kill_pos)


#get exit position
exit_pos = pyautogui.locateOnScreen('exit.png')
print(exit_pos)


# center = pyautogui.center((left, top, width, height))    # 寻找 图片的中心
# print(center)
# pyautogui.click(center)    # 点击
# print('点赞成功！')


# while True:
#     if pyautogui.locateOnScreen('f.png'):
#         zan()   # 调用点赞函数
#     else:
#         pyautogui.scroll(-500)    # 本页没有图片后，滚动鼠标；
#         print('没有找到目标，屏幕下滚~')
