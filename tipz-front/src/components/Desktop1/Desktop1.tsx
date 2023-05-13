import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Ellipse3Icon } from './Ellipse3Icon.js';
import { Ellipse4Icon } from './Ellipse4Icon.js';
import { Ellipse5Icon } from './Ellipse5Icon.js';
import { Ellipse6Icon } from './Ellipse6Icon.js';
import { Ellipse7Icon } from './Ellipse7Icon.js';
import { Ellipse8Icon } from './Ellipse8Icon.js';
import { Vector1Icon } from './Vector1Icon.js';
import { Vector2Icon } from './Vector2Icon.js';
import { Vector3Icon } from './Vector3Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:4 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon} />
      </div>
      <div className={classes.randomQuoteFrmDB}>Random quote frm DB</div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon3} />
      </div>
      <div className={classes.ellipse3}>
        <Ellipse3Icon className={classes.icon4} />
      </div>
      <div className={classes.ellipse4}>
        <Ellipse4Icon className={classes.icon5} />
      </div>
      <div className={classes.ellipse5}>
        <Ellipse5Icon className={classes.icon6} />
      </div>
      <div className={classes.ellipse6}>
        <Ellipse6Icon className={classes.icon7} />
      </div>
      <div className={classes.ellipse7}>
        <Ellipse7Icon className={classes.icon8} />
      </div>
      <div className={classes.ellipse8}>
        <Ellipse8Icon className={classes.icon9} />
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.userQuoteHere}>User Quote Here</div>
      <div className={classes.vector2}>
        <Vector2Icon className={classes.icon10} />
      </div>
      <div className={classes.vector3}>
        <Vector3Icon className={classes.icon11} />
      </div>
      <div className={classes.relevantContent}>Relevant Content</div>
      <div className={classes.relevantContent2}>Relevant Content</div>
      <div className={classes.relevantContent3}>Relevant Content</div>
      <div className={classes.relevantContent4}>Relevant Content</div>
      <div className={classes.relevantContent5}>Relevant Content</div>
    </div>
  );
});
