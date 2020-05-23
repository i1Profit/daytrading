declare lower;

input emaLength = 21;

# EMA of close
def emaValue = ExpAverage(close, emaLength);

# EMAValue while current close is above
def priceCrossAboveEMA = close[1] < emaValue[1] and close > emaValue;

# plot line equal to 1 when condition true, else zero
plot Scan = priceCrossAboveEMA;

assignBackgroundColor(
    if Scan >= 1 then color.WHITE
    else color.BLACK);

scan.assignvaluecolor(
    if priceCrossAboveEMA >= 1 then color.BLACK
    else color.WHITE);
