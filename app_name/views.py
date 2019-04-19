from django.shortcuts import render
from inertia import render_inertia


def index(request):
    return render_inertia(request, 'Index')
