import * as React from 'react';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12 text-left">
                        <a href="https://github.com/oriolpuig/react-starter-kit">GitHub - React-Starter-kit</a>
                    </div>
                    <div className="col-md-6 col-xs-12 text-right">
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <a href="https://twitter.com/oriolpuigbuil">@oriolpuigbuil</a>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <a href="https://twitter.com/genisdiaz">@GenisDiaz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}