from django.contrib import admin

from ecomback.models import Ecomback

class EcombackAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'type', 'inStock')


admin.site.register(Ecomback, EcombackAdmin)

# Register your models here.
