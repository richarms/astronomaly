import setuptools

# with open("README.md", "r") as fh:
#     long_description = fh.read()

setuptools.setup(
    name="astronomaly",
    version="0.0.1",
    author="Michelle Lochner",
    author_email="dr.michelle.lochner@gmail.com",
    description="A general anomaly detection framework for Astronomical data",
    # long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/MichelleLochner/astronomaly",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)