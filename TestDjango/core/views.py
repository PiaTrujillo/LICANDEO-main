# from turtle import home
from django.shortcuts import render, redirect
from django.template import loader
from core.models import Producto
from core.forms import ProductoForm

# Create your views here.


def index(request):
    return render(request, 'core/index.html')


def todos(request):
    return render(request, 'core/todos.html')


def yerba(request):
    return render(request, 'core/yerba.html')


def mates(request):
    return render(request, 'core/mates.html')


def bombillas(request):
    return render(request, 'core/bombillas.html')


def accesorios(request):
    return render(request, 'core/accesorios.html')


def sale(request):
    return render(request, 'core/sale.html')


def registro(request):
    return render(request, 'core/registro.html')

def productos(request):
    datos = {}
    return render(request, 'core/productos.html', datos)

def form_producto(request):
    datos = {
        'form': ProductoForm()
    }
    if request.method == 'POST':
        formulario = ProductoForm(request.POST)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Datos guardados correctamente"

    return render(request, 'core/form_producto.html', datos)

# def form_mod_producto(request):
#     return render(request, 'core/form_mod_producto.html')


def form_mod_producto(request, id):
    producto = Producto.objects.get(sku=id)
    datos = {
        'form': ProductoForm(instance=producto)
    }
    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, instance=producto)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Datos modificados correctamente"
    return render(request, 'core/form_mod_producto.html', datos)

def form_del_producto(request, id):
    producto = Producto.objects.get(sku=id)
    producto.delete()
    return redirect(to="productos")