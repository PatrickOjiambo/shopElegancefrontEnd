/**
 * 
 * @returns Countdown Component
 */
function CountDown() {
    return (<div className="flex  items-center text-xs font-Poppins">
      <div className="ml-8">
        <p>Days</p>
        <p className="text-base font-bold">03</p>
      </div>
      <div className="ml-6">
        <p>Hours</p>
        <p className="text-base font-bold">12</p>
      </div>
      <div className="ml-6">
        <p>Minutes</p>
        <p className="text-base font-bold">56</p>
  
      </div>
      <div className="ml-6">
        <p>Seconds</p>
        <p className="text-base font-bold">55</p>
      </div>
    </div>);
  }
  
  export default CountDown;