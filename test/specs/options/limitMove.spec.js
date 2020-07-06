describe('limitMove (option)', () => {
  it('should disapper from screen by default', (done) => {
    const image = window.createImage();
    const viewer = new Viewer(image, {
      inline: true,
      movable: true,

      viewed() {
        viewer.moveTo(9999, 9999);

        const { imageData } = viewer;

        expect(imageData.left).to.equal(9999);
        expect(imageData.top).to.equal(9999);
        done();
      },
    });

    expect(viewer.options.limitMove).to.be.false;
  });

  it('should not disapper from screen', (done) => {
    const image = window.createImage();
    const viewer = new Viewer(image, {
      inline: true,
      movable: true,
      limitMove: true,

      viewed() {
        viewer.moveTo(9999, 9999);

        const { imageData } = viewer;

        expect(imageData.left).not.equal(9999);
        expect(imageData.top).not.equal(9999);
        done();
      },
    });

    expect(viewer.options.limitMove).to.be.true;
  });
});
