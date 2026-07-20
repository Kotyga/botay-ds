---
title: Sigmoid
---

2026-07-20 в 12:29

Статус: `in progress`
Тег: #Функции_активации #sigmoid

---
# Теория

coming soon...

## Реализация на numpy:

```python
import numpy as np

def sigmoid(x):
    """
    Vectorized sigmoid function.
    """
    x = np.asarray(x, dtype=float) 
    return 1/(1 + np.exp(-x))
    
```

## Визуализация

![[sigmoid.png]]

---
# Ссылки:

1. 
2. 
3. 
