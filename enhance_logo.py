import sys
from PIL import Image, ImageEnhance
from rembg import remove

def process_image(input_path, output_path):
    print(f"Opening {input_path}...")
    try:
        # Open the image
        img = Image.open(input_path)
        
        print("Removing background...")
        # Remove background
        img_no_bg = remove(img)
        
        print("Enhancing image...")
        # Enhance color (saturation)
        enhancer = ImageEnhance.Color(img_no_bg)
        img_enhanced = enhancer.enhance(1.2) # 20% more color
        
        # Enhance contrast
        enhancer = ImageEnhance.Contrast(img_enhanced)
        img_enhanced = enhancer.enhance(1.1) # 10% more contrast
        
        # Save the result
        print(f"Saving to {output_path}...")
        img_enhanced.save(output_path)
        print("Done!")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    input_file = r"c:\WEB-DEV\paply-landing-page\public\paply-logo.png"
    output_file = r"c:\WEB-DEV\paply-landing-page\public\paply-logo-transparent.png"
    process_image(input_file, output_file)
