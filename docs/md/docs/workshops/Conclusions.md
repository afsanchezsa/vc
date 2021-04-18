
### Conclusions & future work W1

- It is necessary to consider the weight that each channel has on the final construction of the image, in order to obtain more accurate results.
- Although Y'709 provides a better result than RGB average, it is necessary to explore the other Luma standards (such as Y'2020) for even better results.
- In images with very few color variations and/or very low quality, the difference between RGB average and Luma tends to be imperceptible.
- Operations such as Gamma correction tend to substantially improve the results, however due to their high computational cost, linear combinations with good performance and a close result are preferred.

In the future, work focused on developing methods with such good results as Gamma correction, with lower computational costs, could be expected.


## Conclusions and Future Work W2
- Convolution allows us to extract certain features from images based on locally analysis of pixels and its weighted sum.
- The kernels will define the size of the convolution.
- Depending on the element values, a kernel can cause a wide range of effects.
- The values of a given pixel in the output image are calculated by multiplying each kernel value by the corresponding input image pixel values

For future work we can highlight convolutional neural networks that apply multiple cascaded convolution kernels with applications in machine vision and artificial intelligence. Though these are actually cross correlations rather than convolutions. And also in analytical chemistry, Savitzky–Golay smoothing filters are used for the analysis of spectroscopic data. They can improve signal-to-noise ratio with minimal distortion of the spectra



## Conclusions & future work W3
 - It is necessary to preprocess the image before grayscaling to maximize the quality of ASCII image.  
 - The bigger the image size, the better ASCII output image quality.  
 - High contrast images throw better results, as the ASCII characters are more varied.  
 - Human perception plays a major role on identifying different objects inside the ASCII image. 

There are many improvements that could be done to make the program more efficient and more functionalities could be implemented. However, what has been explained here should be enough to get someone started.


## Conclusions & Future Work W4
 - The quality of the photomosaic depends on the size of the tiles and the images presented in the dataset.
 - Images with a predominant color in most of the pixels are not the best for this technique.
 - The Euclidean distance is an aproach that work fine in most of the cases. But,  there is some circunstances where the results dont' match with the best possible color.

There are some performance improvements that could be done to optimize the handling of a larger number of images in the dataset and make customizable the size of the tiles and number of images used. However, The implemenation has the basics requirements to acomplish the objective.
