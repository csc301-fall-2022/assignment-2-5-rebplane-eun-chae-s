from django.contrib import admin

# Register your models here.
from .models import Item

class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'quantity', 'price', 'id', 'user')
    fields = ['user', 'name', 'quantity', 'price']

admin.site.register(Item, ItemAdmin)