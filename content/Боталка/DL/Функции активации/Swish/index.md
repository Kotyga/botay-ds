---
title: Swish
---

2026-07-20 в 12:29

Статус: `in progress`
Тег: #Функции_активации #swish

---
# Теория

coming soon...

## Реализация на numpy:

```python
import numpy as np

def sigma(x):
    return 1/(1 + np.exp(-x))

def swish(x):
    """
    Implement Swish activation function.
    """
    x = np.asarray(x, dtype=float)
    return x * sigma(x)
```

## Визуализация

![[swish.png]]

---
# Ссылки:

1. 
2. 
3. 
