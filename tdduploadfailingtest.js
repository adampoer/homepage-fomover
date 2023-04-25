describe('Uploading an image', function() {
    it('should display the uploaded image on the clothing mockup', function() {
      // simulate uploading an image
      // check if the uploaded image is displayed on the clothing mockup
      expect(clothingMockup.getImage()).toEqual('uploaded-image.png');
    });
  });
  