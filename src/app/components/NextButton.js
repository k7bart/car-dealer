import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

const NextButton = ({ isDisabled, makeId, year }) => {
    return (
        <Link
            href={`/result/${makeId}/${year}`}
            className={classNames(
                { 'pointer-events-none opacity-50': isDisabled },
                'block w-48 px-4 py-2 text-white bg-blue-500 rounded-md text-center'
            )}
            aria-disabled={isDisabled}
            tabIndex={isDisabled ? -1 : undefined}
        >
            Next
        </Link>
    );
};

export default NextButton;
