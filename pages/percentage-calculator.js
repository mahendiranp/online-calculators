import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export default function PercentageCalculator() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val1Cal, setVal1Cal] = useState("");

  const [val21, setVal21] = useState("");
  const [val22, setVal22] = useState("");
  const [val21Cal, setVal21Cal] = useState("");

  const [diffVal1, setDiffVal1] = useState("");
  const [diffVal2, setDiffVal2] = useState("");
  const [diffVal, setdiffVal] = useState("");
  const per1 = (event) => {
    let val = event.target.value;
    setVal1(val);
    let perc = ((val2 / 100) * val);
    setVal1Cal(perc);
  }
  const per2 = (event) => {
    let val = event.target.value;
    setVal2(val);
    let perc = ((val / 100) * val1);
    setVal1Cal(perc);
  }

  const per21 = (event) => {
    let val = event.target.value;
    setVal21(val);
    let per2 = ((val * 100) / val22);
    setVal21Cal(per2);
  }
  const per22 = (event) => {
    let val = event.target.value;
    setVal22(val);
    let per2 = ((val21 * 100) / val);
    setVal21Cal(per2);
  }

  const diffValx = (event) => {
    let val = event.target.value;
    setDiffVal1(val);
    let decreaseValue = val - diffValy;
    setdiffVal((decreaseValue / diffVal1) * 100);
  }

  const diffValy = (event) => {
    let val = event.target.value;
    setDiffVal2(val);
    let decreaseValue = diffVal1 - val;
    setdiffVal((decreaseValue / diffVal1) * 100);
  }

  return (
    <div className="container">
    <h1>Percentage Calculator</h1>
    <p>Percentage Calculator is a free online tool to calculate percentages.</p>
    <div className="highlight"  aria-labelledby="calculators1-tab">
        <div className="calculator-holder">
            <div className="calculator-container mt-4 mb-4">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-1 pr-1">
                        <div className="input-title" data-word-count="4">
                            <p>What is</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group cal-input">
                            <input type="number" className="form-control" placeholder="x" onChange={per1} />
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className="input-title" data-word-count="4">
                            <p>% of</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group cal-input">
                            <input type="number" className="form-control" placeholder="y" onChange={per2} />
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className="input-title" data-word-count="3">
                            <p>Value:</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="result">{val1Cal}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="calculator-holder">
            <div className="calculator-container mt-4 mb-4">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-3">
                        <div className="form-group cal-input">
                            <input type="number" className="form-control" placeholder="x" onChange={per21} />
                        </div>
                    </div>
                    <div className="col-lg-2 px-1">
                        <div className="input-title" data-word-count="6" data-p-count="1">
                            <p>is what percent of</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group cal-input">
                            <input type="number" className="form-control" placeholder="y" onChange={per22} />
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className="input-title" data-word-count="3">
                            <p>Value:</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="result result-2">{val21Cal}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="calculator-holder">
            <div className="calculator-container mt-4 mb-4">
                <div className="cal-title">
                    <h4 className="mb-3">What is the percentage increase/decrease</h4>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-1">
                        <div className="input-title" data-word-count="3">
                            <p>From</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group cal-input">
                            <input type="number" className="form-control" placeholder="x" onChange={diffValx} />
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className="input-title" data-word-count="3">
                            <p>to</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group cal-input">
                            <input type="number" className="form-control" placeholder="y" onChange={diffValy} />
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className="input-title" data-word-count="3">
                            <p>Value:</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="result result-2">{diffVal}</div>
                    </div>
                </div>
                <div className="mt-3 mt-md-0 mb-md-2">
                    A positive answer represents a percent increase. A negative answer represents a percent decrease.
                </div>
            </div>
        </div>
    </div>
</div>

  )
}
