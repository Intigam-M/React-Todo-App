from django.shortcuts import render
from rest_framework import generics, status
from .models import Todo
from .serializers import TodoSerializers
from rest_framework.decorators import api_view
from rest_framework.response import Response 

# Create your views here.



class TodoListAV(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializers

class TodoDetailAV(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializers


@api_view(['POST'])
def complete_all(request):
    Todo.objects.all().update(completed=True)
    return Response(status=status.HTTP_202_ACCEPTED)

@api_view(['POST'])
def uncomplete_all(request):
    Todo.objects.all().update(completed=False)
    return Response(status=status.HTTP_202_ACCEPTED)

@api_view(['POST'])
def delete_all(request):
    Todo.objects.all().delete()
    return Response(status=status.HTTP_202_ACCEPTED)