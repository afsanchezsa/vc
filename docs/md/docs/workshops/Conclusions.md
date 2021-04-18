
## Conclusions

- It is necessary to consider the weight that each channel has on the final construction of a grayscale image to obtain get a sharper image. For example, it is recommended to explore other Luma standards (such as Y'2020) for even better results. Although, changes in low contrast image appear to be imperceptible.
- Convolution allows us to extract certain features from images based on locally analysis of pixels and its weighted sum. Depending on its values, a kernel can cause a wide range of effects.
- It is necessary to preprocess the image before grayscaling to maximize the quality of the final ASCII image. Applying a high contrast filter in the preprocessing part greatly improves image quality, as the ASCII characters are more varied.  
- The Euclidean distance is an aproach that works fine in most cases but there are some circunstances where the results don't match with the best possible color.

## Future work
Image processing is an important branch that can demand a lot of computer power. This is why finding new and clever methods is always helpful. In this section future work on each topic covered before is explored.

Firstly, in image grayscaling, work focused on developing algorithms with good results could be expected, such as Gamma correction with lower computational costs. 

Secondly, for future work we can highlight convolutional neural networks that apply multiple cascaded convolution kernels with applications in machine vision and artificial intelligence. Though these are actually cross correlations rather than convolutions. And also in analytical chemistry, Savitzky–Golay smoothing filters are used for the analysis of spectroscopic data. They can improve signal-to-noise ratio with minimal distortion of the spectra. 

Thirdly, it is recommended to explore the power of multiprocessing to calculate the mapping between every pixel and its matching ASCII character. 

Finally, there are some performance improvements that could be done to optimize the handling of larger numbers of images in a dataset to create a photomosaic while making it customizable the size of the tiles and number of images used. However, this implementation has the basic requirements to acomplish the objective.

