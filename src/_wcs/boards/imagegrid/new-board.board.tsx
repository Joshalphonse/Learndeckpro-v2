import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Imagegrid } from '../../../imagegrid/imagegrid';

export default createBoard({
    name: 'New Board',
    Board: () => <Imagegrid />,
    environmentProps: {
        canvasWidth: 1074
    }
});
