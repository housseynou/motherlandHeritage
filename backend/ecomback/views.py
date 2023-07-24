from django.shortcuts import render
from ecomback.models import Ecomback

def product_list(request):
    products = Ecomback.objects.all()
    return render(request, 'ecomback/product_list.html', {'products': products})

