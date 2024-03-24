# a5e

大晚上看 k8s 文档有感，到底是谁起的头把英文单词搞成这样的缩写😓：i18n、a11y、k8s、k3s。

所以写了个小工具将所有单词替换为类似的缩写。

[在线体验](https://flapypan.github.io/a5e/)

使用方法参考：

```javascript
import a5e from './a5e.mjs'

console.log(a5e(`We choose to go to the moon.
We choose to go to the moon in this decade and do the other things,
not because they are easy, but because they are hard,
because that goal will serve to organize and measure the best of our energies and skills,
because that challenge is one that we are willing to accept,
one we are unwilling to postpone, and one which we intend to win, and the others, too. `))
/*
We c4e to go to t1e m2n.
We c4e to go to t1e m2n in t2s d4e a1d do t1e o3r t4s,
n1t b5e t2y a1e e2y, b1t b5e t2y a1e h2d,
b5e t2t g2l w2l s3e to o6e a1d m5e t1e b2t of o1r e6s a1d s4s,
b5e t2t c7e is o1e t2t we a1e w5g to a4t,
o1e we a1e u7g to p6e, a1d o1e w3h we i4d to w1n, a1d t1e o4s, t1o.
*/
```