import { styled } from 'styled-components'
import { Pad, Layers } from '../../patterns/patterns.jsx';

export const ContentArea = styled(Layers).attrs(() => ({
    as: Pad,
    padding: "l",
    gutter: "s",
  }))`
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
  `;