from django.db import models
from datetime import datetime


# Create your models here.

class Source(models.Model):
    '''
    数据来源
    '''
    title = models.CharField(max_length=20, verbose_name="来源名称")
    is_delete = models.BooleanField(default=0, verbose_name="是否删除")
    image = models.ImageField(upload_to='source/%Y/%m', verbose_name='封面图', max_length=100,
                              default='course/default.png')
    kind = models.ForeignKey("Kind", verbose_name="来源类型")
    click_times = models.IntegerField(default=0, verbose_name="点击率")
    create_time = models.DateTimeField(default=datetime.now(), verbose_name="创建时间")
    lable = models.CharField(max_length=20, verbose_name='数据来源标签', null=True, blank=True)

    class Meta:
        verbose_name = "数据来源"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.title


class Kind(models.Model):
    '''
    来源类型
    '''
    title = models.CharField(max_length=20, verbose_name="来源类型")

    class Meta:
        verbose_name = "来源类型"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.title


class HostList(models.Model):
    '''
    热榜榜单信息
    '''
    title = models.CharField(max_length=200, verbose_name="热榜标题")
    href = models.CharField(max_length=200, verbose_name="链接")
    label = models.CharField(max_length=20, verbose_name="量化标签")
    source = models.ForeignKey("Source", verbose_name="热榜来源")

    class Meta:
        verbose_name = "热榜榜单信息"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.title
