//Последовательное выполнение функций высшего порядка,
//указанных в аргументах справа налево, к компоненту
const compose = (...funcs) => (component) => {
  return funcs.reduceRight(
    (wrapped, f) => f(wrapped), component);
};

export default compose;