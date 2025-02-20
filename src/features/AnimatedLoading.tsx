const AnimatedLoading = ({ text = "Loading..." }: { text: string }) => {

  const animLength = 2;
  const word = text.split("")
  return (
    <span>
      {
        word.map((v, index) =>
          <span className="dotFloat inline-block"
            key={index}
            style={{
              animationDuration: animLength + "s",
              animationDelay: (animLength / word.length) * index + "s"
            }}
          >
            {v}
          </span>
        )
      }
    </span>
  )
}

export default AnimatedLoading