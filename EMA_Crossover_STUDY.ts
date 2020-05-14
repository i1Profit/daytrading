
declare lower;

input emaLength = 21;

# define the exponential averge of the close
def emaValue = ExpAverage(close, emaLength); 

# define a signal that equals one if the previous bar close is below the
# emaValue while the current bar close is above the emaValue
def priceCrossAboveEMA = close[1] < emaValue[1] and close > emaValue;

# plot a signal line that will equal a value of 1 when the 
# condition is found, zero if not found
plot Scan = priceCrossAboveEMA;

assignBackgroundColor(if Scan >= 1 then color.WHITE else color.BLACK);

scan.assignvaluecolor(if priceCrossAboveEMA >= 1 then color.BLACK else color.WHITE);


 
