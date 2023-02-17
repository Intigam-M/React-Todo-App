from django.urls import path
from . import views


urlpatterns = [
    path('todo-list/', views.TodoListAV.as_view(), name='todo-list'),
    path('todo-list/<int:pk>', views.TodoDetailAV.as_view(), name='todo-detail'),
    path('delete-all-todo/', views.delete_all, name='delete-all-todo'),
    path('complete-all-todo/', views.complete_all, name='complete-all-todo'),
    path('uncomplete-all-todo/', views.uncomplete_all, name='uncomplete-all-todo'),
]
