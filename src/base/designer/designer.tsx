import * as React from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import './styles.scss';

const { useState } = React;

const stageSize = {
    width: screen.width / 2,
    height: screen.height / 2
};

const cursorType = {
    default: 'default',
    move: 'move'
};

export const Designer = () => {
    const [cursor, setCursor] = useState(cursorType.default);

    return (
        <Stage
            className="base-stage"
            style={{ cursor }}
            width={stageSize.width}
            height={stageSize.height}>
            <Layer>
                <Rect
                    x={20}
                    y={20}
                    width={50}
                    height={50}
                    fill={'#2e0fd0'}
                    shadowBlur={5}
                    draggable
                    onMouseEnter={() => setCursor(cursorType.move)}
                    onMouseLeave={() => setCursor(cursorType.default)}
                />
            </Layer>
        </Stage>
    );
};
