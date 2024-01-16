import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// 
const Twitter = () => {
  return (
    <>
    {/* eslint-disable-next-line no-restricted-globals */}
        <>
            <div className='twiter-style'>
                <TwitterTimelineEmbed 
                    sourceType='profile'
                    screenName='BitcoinMagazine'
                    options={{innerHeight: 400}}
                    theme='dark'
                />
            </div>
        </>
    </>
  )
}

export default Twitter