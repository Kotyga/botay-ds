---
title: ELU
---
2026-07-20 в 12:23

Статус: `in progress`
Тег: #Функции_активации #elu

---
# Теория

coming soon...

## Реализация на numpy:

```python
import numpy as np 

def elu(x, alpha):
    """
    Apply ELU activation to each element.
    """
    x = np.asarray(x, dtype=float)
    return np.where(x > 0, x, alpha * (np.exp(x) - 1))
```

## Визуализация

![ELU](content/attach/elu.png)

---
# Ссылки:

1. 
2. 
3. 
