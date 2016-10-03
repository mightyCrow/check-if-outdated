import test from 'ava';
import isOutdated from './index';

test(t => {
	t.is(typeof isOutdated, 'function');
});
