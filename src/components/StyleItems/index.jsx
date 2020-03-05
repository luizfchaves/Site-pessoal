import React from "react";

// import { Container } from './styles';

const StyleItems = () => {
  return (
    <>
      <div className="section">
        <p className="title text-center">Buttons</p>
        <div>
          <button className="btn btn-primary btn-small">
            btn-primary btn-small
          </button>
          <button className="btn btn-primary">btn-primary</button>
          <button className="btn btn-primary btn-large">
            primary btn-large
          </button>
        </div>
        <div>
          <button className="btn btn-secondary btn-small">
            btn-secondary btn-small
          </button>
          <button className="btn btn-secondary">btn-secondary</button>
          <button className="btn btn-secondary btn-large">
            btn-secondary btn-large
          </button>
        </div>
      </div>
      <hr />
      <div className="section">
        <p className="title text-center">Paragraph</p>
        <p className="ntext distance-above">Normal text</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          sapien est, gravida vel posuere nec, vulputate feugiat justo.
          Curabitur imperdiet sollicitudin purus. Curabitur arcu ex, fermentum
          sit amet dignissim at, eleifend et urna. Sed sit amet sapien
          dignissim, bibendum ipsum at, volutpat massa.
        </p>
        <p className="sub-title distance-above">sub-title text</p>
        <p className="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          sapien est, gravida vel posuere nec, vulputate feugiat justo.
          Curabitur imperdiet sollicitudin purus. Curabitur arcu ex, fermentum
          sit amet dignissim at, eleifend et urna. Sed sit amet sapien
          dignissim, bibendum ipsum at, volutpat massa.
        </p>
        <p className="title distance-above">title text</p>
        <p className="title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          sapien est, gravida vel posuere nec, vulputate feugiat justo.
        </p>
        <hr className="hr-small" />
        <p className="sub-title text-center">Distances</p>

        <p className="distance-above">distance-above text</p>
        <p>Normal text</p>
        <p>Normal text</p>
        <p className="distance-above">distance-above text</p>

        <hr className="hr-small" />
        <p className="sub-title text-center">Alignments</p>
        <p className="text-left">text-left</p>
        <p className="text-center">text-center</p>
        <p className="text-right">text-right</p>
      </div>
      <hr />
      <div className="section">
        <p className="title text-center">Flex-col</p>
        {/* prettier-ignore */}
        <pre>
          <code>
            Use 
            &lt;div class="row">
              &lt;div className="col-x">
              &lt;div>
            &lt;/div>
          </code>
        </pre>

        <p className="sub-title distance-above">row col-2</p>
        <div className="row">
          <div className="col-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sapien est, gravida vel posuere nec, vulputate feugiat justo.
              Curabitur imperdiet sollicitudin purus. Curabitur arcu ex,
              fermentum sit amet dignissim at, eleifend et urna. Sed sit amet
              sapien dignissim, bibendum ipsum at, volutpat massa.
            </p>
          </div>
          <div className="col-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sapien est, gravida vel posuere nec, vulputate feugiat justo.
              Curabitur imperdiet sollicitudin purus. Curabitur arcu ex,
              fermentum sit amet dignissim at, eleifend et urna. Sed sit amet
              sapien dignissim, bibendum ipsum at, volutpat massa.
            </p>
          </div>
        </div>
        <p className="sub-title distance-above">row col-3</p>
        <div className="row">
          <div className="col-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sapien est, gravida vel posuere nec, vulputate feugiat justo.
              Curabitur imperdiet sollicitudin purus. Curabitur arcu ex,
              fermentum sit amet dignissim at, eleifend et urna. Sed sit amet
              sapien dignissim, bibendum ipsum at, volutpat massa.
            </p>
          </div>
          <div className="col-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sapien est, gravida vel posuere nec, vulputate feugiat justo.
              Curabitur imperdiet sollicitudin purus. Curabitur arcu ex,
              fermentum sit amet dignissim at, eleifend et urna. Sed sit amet
              sapien dignissim, bibendum ipsum at, volutpat massa.
            </p>
          </div>
          <div className="col-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sapien est, gravida vel posuere nec, vulputate feugiat justo.
              Curabitur imperdiet sollicitudin purus. Curabitur arcu ex,
              fermentum sit amet dignissim at, eleifend et urna. Sed sit amet
              sapien dignissim, bibendum ipsum at, volutpat massa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleItems;
