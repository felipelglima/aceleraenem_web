export const Countdown = () => {
  return (
    <div className="mx-0 my-auto w-max">
      <div className="bloc-time hours" data-init-value="24">
        <div className="figure hours hours-1">
          <span className="top">2</span>
          <span className="bottom">2</span>
        </div>

        <div className="figure hours hours-2">
          <span className="top">4</span>
          <span className="bottom">4</span>
        </div>

        <div className="figure hours hours-2">
          <span className="top">4</span>
          <span className="bottom">4</span>
        </div>
      </div>
    </div>
  )
}
