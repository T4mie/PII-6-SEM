#importing required libraries
from skimage.io import imread
from skimage.transform import resize
from skimage.feature import hog
from skimage import exposure
import matplotlib.pyplot as plt

# reading the image
img = imread('hand_furlan_ring.png')
plt.axis("off")
plt.imshow(img)
print(img.shape)

# resizing image
resized_img = resize(img, (128*4, 64*4))
plt.axis("off")
plt.imshow(resized_img)
print(resized_img.shape)

#creating hog features
fd, hog_image = hog(resized_img, orientations=9, pixels_per_cell=(8, 8),
                	cells_per_block=(2, 2), visualize=True, channel_axis=-1)

plt.axis("off")
plt.imshow(hog_image, cmap="gray")

# save the images
plt.imsave("hog_image_2.jpg", hog_image, cmap="gray")