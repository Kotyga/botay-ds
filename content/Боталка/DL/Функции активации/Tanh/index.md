---
title: Tanh
---

2026-07-20 в 12:30

Статус: `in progress`
Тег: #Функции_активации #tahn

---
# Теория

coming soon...

## Реализация на numpy:

```python
import numpy as np

def tanh(x):
    """
    Implement Tanh activation function.
    """
    x = np.asarray(x, dtype=float)
    return (np.exp(x) - np.exp(-x))/(np.exp(x) + np.exp(-x))
```

## Визуализация

![Tanh](content/attach/tanh.png)

---
# Ссылки:

1. 
2. 
3. 
