from django.shortcuts import render
from .models import Ecomback
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from rest_framework import generics

class ProductView(generics.ListAPIView):
    queryset = Ecomback.objects.all()
    serializer_class = ProductSerializer
#class ReactView(APIView):   
 #   def get(self, request):
 #       product = [{'name': product.name, 'description': product.description, 'type': product.type, 'inStock': product.inStock}
 #                   for product in Ecomback.objects.all()]
 #       return Response(product)
       #products = Ecomback.objects.all()
       #for product in products:
        #   return Response(product)
    
 #   def post(self, request):
 #       serializers = Reactserializer(data=request.data)
  #      if serializers.is_valid(raise_exception=True):
 #           serializers.save()
  #          return Response(serializers.data)

