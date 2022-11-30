import ast

# 当前筛选项集下标——0-单项集、1-二项集、2-三项集...
temp_index = 0
# 数据总行数
total_num_g = 0
# 项集临时存放；格式[[单项集], [二项集], [三项集], [四项集], ...]
temp_g = []
# 源数据中包含元素最多的项集长度
max_length_g = 0
# 单项集，第一次调用get_sup函数时需要
single_list_g = []


def disposition_data(data_list):
    """
    将用户选择的数据经过处理后获取相关数据，并将需要的数据保存为全局变量以便后面使用

    Parameters
    ----------
    data_list: list
        源数据

    Returns
    -------
    item_set: list
        返回下一项集
    """
    global total_num_g, temp_g, max_length_g, single_list_g
    for it in data_list:
        # 获取每行数据中最长长度max_length
        max_length_g = max_length_g if len(it) < max_length_g else len(it)
    # 数据总行数
    total_num_g = len(data_list)
    i = 0
    while i < max_length_g:
        temp_ = []
        temp_g.append(temp_)
        i = i + 1
    for i in data_list:
        for j in range(len(i)):
            temp_g[j].append(i)
    for data in temp_g[0]:
        for element in data:
            # 将数据中每行的项存入单项集singleSet中
            single_list_g.append(element)
    # 去除重复元素,并且按照字母顺序排序
    single_list_g = sorted(set(single_list_g))


def apriori(data_list, min_sup=None, item_list=None, total_record=None):
    """
    获取各个项的支持率

    Parameters
    ----------
    data_list: list
        需要进行关联规则的数据，数组格式。
    min_sup: float
        最低支持率，默认值为0.0
    item_list: list
        项集
    total_record: int
        数据总行数，且不能为0

    Returns
    -------
    以项集为key，支持率为value的字典形式返回
    """
    # 存放单项和对应的支持率
    item_sup_dic = {}
    # 源数据最大项集
    global temp_index
    # 这里只需执行一次
    if temp_index == 0 and (item_list is None or total_record is None):
        # 处理数据
        disposition_data(data_list)
        item_list = single_list_g
        total_record = total_num_g
        data_list = temp_g

    for single in item_list:
        # 支持率初始为0
        sup = 0
        # 单项在每个项集的个数初始为0
        num = 0
        for item in data_list[temp_index]:
            # 单项集中的元素是字符串格式，直接使用in判断
            if isinstance(single, str) and single in item:
                num = 1 + num
                sup = num / total_record
            # 针对多项集（元素是集合）的生成，判断是否具有包含关系
            elif set(item).issuperset(set(single)):
                num = 1 + num
                sup = num / total_record
        # 排除支持率在low_sup下的
        if min_sup is None or min_sup == 0.0:
            item_sup_dic[str(single)] = sup
        elif sup >= min_sup:
            item_sup_dic[str(single)] = sup
        elif min_sup > 1.0 or min_sup < 0.0:
            raise ValueError("你应该使用[0.0, 1.0]的浮点小数")
    # 将有效结果结果保存到previous_item_sup
    previous_item_sup = item_sup_dic
    # 获取下一项集
    if len(item_sup_dic.keys()) != 0:
        # 从符合支持率在min_sup之上的项集中递归获取下一项集
        item_list = scanning_item(list(item_sup_dic))
    # min_sup=0 => IndexError: list index out of range
    if len(item_list) > 1 and len(previous_item_sup.keys()) != 0 and temp_index < max_length_g - 1:
        # 排除n项集时不需一直对原数据扫描，n项集只需与n项集比较
        temp_index += 1
        # 递归获取筛选出符合支持率在min_sup之上的项集
        item_sup_dic = apriori(data_list, min_sup, item_list, total_record)
    return previous_item_sup if len(item_sup_dic.keys()) == 0 else item_sup_dic


def scanning_item(item_):
    """
    根据传入的项集，生成下一项集

     Parameters
    ----------
    item_: list
        项集，list格式

    Returns
    -------
    item_set: list
        返回下一项集
    """
    # 将处理item_数据后的结果放入item_from_sup
    item_from_sup = []
    # 使用捕获异常来处理单项集中字符串无法转换成list的问题
    try:
        if isinstance(item_[0], str):
            for i in item_:
                # 没有异常，将字典中str类型的keys转化成list形式
                item_from_sup.append(ast.literal_eval(i))
    except ValueError:
        # 如果有异常，直接使用传入的参数
        item_from_sup = item_
    # 项集，最后作为结果返回
    item_set = []
    # 外层循环次数
    outside_index = 0
    # 获取单项集的笛卡尔:ABC*ABC形式
    for single1 in item_from_sup:
        # 控制while循环,这里的AB = BA，保留AB
        single2 = outside_index
        # 由于单项集中的元素格式是字符串格式，所以这里需要与多项集处理方法分开
        if isinstance(single1, str):
            while single2 < len(item_from_sup):
                # 去除AA的情况
                if single1 != item_from_sup[single2]:
                    item_set.append([single1] + [item_from_sup[single2]])
                single2 = single2 + 1
        # 多项集 -> 多项集，多项集里面的元素是以list形式存放
        else:
            while single2 < len(item_from_sup) - 1:
                # 如果是['a', 'b']遇到['a', 'c']的情况，并且对称差集symmetric_difference要属于上一级项集
                # 如果遇到['a', 'b', 'c', 'd']与['a', 'b', 'e', 'f']的情况下面的方法失效
                # symmetric_difference = sorted(set(single1).symmetric_difference(item_from_sup[single2 + 1]))
                symmetric_difference = sorted(set(single1[1:]).union(set(item_from_sup[single2 + 1][1:])))
                # 根据项集中的第一个项是否相同并且两个项集的对称差集属于原项集(item_list)
                if single1[0] == item_from_sup[single2 + 1][0] and symmetric_difference in item_from_sup:
                    # 取两个集合的并集并且按照字母先后排序,如果这里不排序，生成多项集时会出现空或者少项
                    item_set.append(sorted(set(single1).union(item_from_sup[single2 + 1])))
                    single2 = single2 + 1
                else:
                    break
        outside_index = outside_index + 1
    return item_set
