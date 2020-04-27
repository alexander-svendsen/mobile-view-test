import React from 'react';

export function Flex() {
    return (
        <div className="box">
            <div className="row header">
                <p><b>header</b>
                    <br/>
                    <br/>(sized to content)</p>
            </div>
            <div className="row content">
                <p>
                    <b>content</b>
                    (fills remaining space)
                </p>
            </div>
            <div className="row footer">
                <p><b>footer</b> (fixed height)</p>
            </div>
        </div>
    )
}