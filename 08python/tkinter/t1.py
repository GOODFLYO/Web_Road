# -*- coding:utf-8 -*-
import tkinter as tk
# 调用Tk()创建主窗口
root_window =tk.Tk()
# 给主窗口起一个名字，也就是窗口的名字
root_window.title('小周学tk')
# 设置窗口大小:宽x高,注,此处不能为 "*",必须使用 "x"
root_window.geometry('450x300')
# 更改左上角窗口的的icon图标,加载C语言中文网logo标
root_window.iconbitmap('F:/PicVideoAudio/常用照片/头像/favicon1.ico')
#开启主循环，让窗口处于显示状态
root_window.mainloop()