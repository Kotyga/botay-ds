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
    for i in range(len(x)):
        if x[i] <= 0:
            x[i] = alpha * (np.exp(x[i]) - 1) 
    
    return x
```

---
# Ссылки:

1. 
2. 
3. 
