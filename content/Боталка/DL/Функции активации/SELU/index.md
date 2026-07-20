---
title: SELU
---

2026-07-20 в 12:29

Статус: `in progress`
Тег: #Функции_активации #selu

---
# Теория

coming soon...

## Реализация на numpy:

```python
import numpy as np

def selu(x, lam=1.0507009873554804934193349852946, alpha=1.6732632423543772848170429916717):
    """
    Apply SELU activation element-wise.
    Returns a list of floats rounded to 4 decimal places.
    """
    x = np.asarray(x, dtype=float)
    return lam * np.where(
        x > 0,
        x,
        alpha * (np.exp(x) - 1)
    )
```

## Визуализация

![[selu_lam.png]]

![[selu_alpha.png]]

![[selu.png]]

---
# Ссылки:

1. 
2. 
3. 
