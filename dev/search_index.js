var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = TimeseriesTools","category":"page"},{"location":"#TimeseriesTools","page":"Home","title":"TimeseriesTools","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for TimeseriesTools.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [TimeseriesTools]","category":"page"},{"location":"#TimeseriesTools.UnitfulIndex","page":"Home","title":"TimeseriesTools.UnitfulIndex","text":"UnitfulIndex\n\nA type alias for a union of AbstractArray, AbstractRange, and Tuple types with Unitful.Time elements.\n\n\n\n\n\n","category":"type"},{"location":"#IntervalSets.Interval-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:DimensionalData.Dimensions.TimeDim, B} where {T, N, B}}","page":"Home","title":"IntervalSets.Interval","text":"IntervalSets.Interval(x::AbstractTimeSeries)\n\nReturns an interval representing the range of the AbstractTimeSeries x.\n\nExamples\n\njulia> using IntervalSets;\njulia> t = 1:100;\njulia> x = rand(100);\njulia> ts = TimeSeries(t, x);\njulia> IntervalSets.Interval(ts) == (1..100)\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.AbstractSpectrum","page":"Home","title":"TimeseriesTools.AbstractSpectrum","text":"AbstractSpectrum{T, N, B}\n\nA type alias for an AbstractDimArray in which the first dimension is Frequency.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.AbstractTimeSeries","page":"Home","title":"TimeseriesTools.AbstractTimeSeries","text":"AbstractTimeSeries{T, N, B}\n\nA type alias for an AbstractDimArray with a time index.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.BinaryTimeSeries","page":"Home","title":"TimeseriesTools.BinaryTimeSeries","text":"BinaryTimeSeries\n\nA type alias for a time series of bits.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.Freq","page":"Home","title":"TimeseriesTools.Freq","text":"Freq\n\nA DimensionalData.jl dimension representing the frequency domain.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.FreqIndex","page":"Home","title":"TimeseriesTools.FreqIndex","text":"FreqIndex\n\nA type alias for a tuple of dimensions, where the first dimension is of type FrequencyDim.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.IrregularIndex","page":"Home","title":"TimeseriesTools.IrregularIndex","text":"IrregularIndex\n\nA type alias for an irregularly sampled dimension, wrapping an AbstractVector.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.IrregularTimeIndex","page":"Home","title":"TimeseriesTools.IrregularTimeIndex","text":"IrregularTimeIndex\n\nA type alias for a tuple of dimensions containing a TimeIndex and any number of other dimensions.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.IrregularTimeSeries","page":"Home","title":"TimeseriesTools.IrregularTimeSeries","text":"IrregularTimeSeries\n\nA type alias for a potentially irregularly sampled time series.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.MultidimensionalTimeSeries","page":"Home","title":"TimeseriesTools.MultidimensionalTimeSeries","text":"A multidimensional time series is one that has a regular sampling over a dimension other than time; a one-dimensional time series can be thought of as a field over a even grid in 1 dimension that fluctuates over time.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.MultivariateSpectrum","page":"Home","title":"TimeseriesTools.MultivariateSpectrum","text":"MultivariateSpectrum{T} = AbstractSpectrum{T, 2} where T\n\nA type alias for a multivariate spectrum.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.MultivariateTimeSeries","page":"Home","title":"TimeseriesTools.MultivariateTimeSeries","text":"MultivariateTimeSeries{T}\n\nA type alias for a multivariate time series (A matrix, with a first Ti dimension and an arbitrary second dimension).\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.RegularFreqIndex","page":"Home","title":"TimeseriesTools.RegularFreqIndex","text":"RegularFreqIndex\n\nA type alias for a tuple of dimensions, where the first dimension is a regularly sampled Frequency.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.RegularIndex","page":"Home","title":"TimeseriesTools.RegularIndex","text":"RegularIndex\n\nA type alias for a regularly sampled dimension, wrapping an AbstractRange.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.RegularSpectrum","page":"Home","title":"TimeseriesTools.RegularSpectrum","text":"RegularSpectrum{T, N, B}\n\nA type alias for a spectrum with a regularly sampled frequency index.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.RegularTimeIndex","page":"Home","title":"TimeseriesTools.RegularTimeIndex","text":"RegularTimeIndex\n\nA type alias for a tuple of dimensions containing a TimeIndex and any number of other dimensions.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.RegularTimeSeries","page":"Home","title":"TimeseriesTools.RegularTimeSeries","text":"RegularTimeSeries{T, N, B}\n\nA type alias for a regularly sampled time series.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.SpikeTrain","page":"Home","title":"TimeseriesTools.SpikeTrain","text":"SpikeTrain\n\nA type alias for a spike-train time series, which contains spike times in the time dimension and true for all values corresponding to a spike. The spike times can be retrieved with times(x).\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.TimeIndex","page":"Home","title":"TimeseriesTools.TimeIndex","text":"TimeIndex\n\nA type alias for a tuple containing a time dimension and any number of other dimensions.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.UnitfulSpectrum","page":"Home","title":"TimeseriesTools.UnitfulSpectrum","text":"UnitfulSpectrum{T,N,B}\n\nA type representing spectra with unitful frequency units.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.UnitfulTimeIndex","page":"Home","title":"TimeseriesTools.UnitfulTimeIndex","text":"UnitfulTimeIndex\n\nA type alias for a tuple of dimensions, where the first dimension is of type DimensionalData.Dimension{<:UnitfulIndex}.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.UnitfulTimeSeries","page":"Home","title":"TimeseriesTools.UnitfulTimeSeries","text":"UnitfulTimeSeries{T, N, B}\n\nA type alias for an AbstractDimArray with a UnitfulTimeIndex.\n\nExamples\n\njulia> using Unitful;\njulia> t = (1:100)u\"s\";\njulia> x = rand(100);\njulia> uts = TimeSeries(t, x);\njulia> uts isa UnitfulTimeSeries\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.UnivariateSpectrum","page":"Home","title":"TimeseriesTools.UnivariateSpectrum","text":"UnivariateSpectrum{T} = AbstractSpectrum{T, 1} where T\n\nA type alias for a univariate spectrum.\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.UnivariateTimeSeries","page":"Home","title":"TimeseriesTools.UnivariateTimeSeries","text":"UnivariateTimeSeries{T}\n\nA type alias for a time series with one variable (a vector with only a Ti dimension).\n\n\n\n\n\n","category":"type"},{"location":"#TimeseriesTools.Var","page":"Home","title":"TimeseriesTools.Var","text":"Var\n\nA DimensionalData.jl dimension representing the variables of a multivariate time series.\n\n\n\n\n\n","category":"type"},{"location":"#Base.cat-Tuple{DimensionalData.Dimensions.Dimension, AbstractDimArray, Vararg{Any}}","page":"Home","title":"Base.cat","text":"Base.cat(D::DimensionalData.Dimension, args...; kwargs...)\n\nConcatenate the arrays given in args..., and give the resulting extra axis dimensions D. Note that unlike Base.cat without the first Dim argument, this increments all existing dimensions greater than dims by one (so N n×n arrays concatenated at dims=1 will result in an N×n×n array).\n\n\n\n\n\n","category":"method"},{"location":"#Base.step-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:(DimensionalData.Dimensions.TimeDim{<:DimensionalData.Dimensions.LookupArrays.Sampled{T, R} where {T, R<:AbstractRange}}), B} where {T, N, B}}","page":"Home","title":"Base.step","text":"step(x::RegularTimeSeries)\n\nReturns the step size (time increment) of a regularly sampled RegularTimeSeries.\n\nExamples\n\njulia> t = 1:100;\njulia> x = rand(100);\njulia> rts = TimeSeries(t, x);\njulia> step(rts) == 1\n\n\n\n\n\n","category":"method"},{"location":"#GeometryBasics.decompose-Tuple{Union{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:Freq, B} where {T, N, B}, AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:DimensionalData.Dimensions.TimeDim, B} where {T, N, B}}}","page":"Home","title":"GeometryBasics.decompose","text":"decompose(x::Union{<:AbstractTimeSeries, <:AbstractSpectrum})\n\nConvert a time series or spectrum to a tuple of the dimensions and the data (as Arrays).\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.Spectrum-Tuple{Any, Any, Any}","page":"Home","title":"TimeseriesTools.Spectrum","text":"Spectrum(f, v, x)\n\nConstructs a multivariate spectrum with frequencies f, variables v, and data x.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.Spectrum-Tuple{Any, Any}","page":"Home","title":"TimeseriesTools.Spectrum","text":"Spectrum(f, x)\n\nConstructs a univariate time series with frequencies f and data x.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.TimeSeries-Tuple{Any, Any, Any}","page":"Home","title":"TimeseriesTools.TimeSeries","text":"TimeSeries(t, v, x)\n\nConstructs a multivariate time series with time t, variable v, and data x.\n\nExamples\n\njulia> t = 1:100;\njulia> v = [:a, :b, :c];\njulia> x = rand(100, 3);\njulia> mts = TimeSeries(t, v, x)\njulia> mts isa typeintersect(MultivariateTimeSeries, RegularTimeSeries)\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.TimeSeries-Tuple{Any, Any, Unitful.Units}","page":"Home","title":"TimeseriesTools.TimeSeries","text":"TimeSeries(t, x, timeunit::Unitful.Units)\n\nConstructs a univariate time series with time t, data x and time units specified by timeunit. Note that you can add units to the elements of a time series x with, for example, x*u\"V\".\n\nExamples\n\njulia> using Unitful;\njulia> t = 1:100;\njulia> x = rand(100);\njulia> ts = TimeSeries(t, x, u\"ms\")*u\"V\";\njulia> ts isa Union{UnivariateTimeSeries, RegularTimeSeries, UnitfulTimeSeries}\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.TimeSeries-Tuple{Any, Any}","page":"Home","title":"TimeseriesTools.TimeSeries","text":"TimeSeries(t, x)\n\nConstructs a univariate time series with time t and data x. Alteratively, use TS(t, x)\n\nExamples\n\njulia> using TimeseriesTools, Unitful;\njulia> t = 1:100\njulia> x = rand(100)\njulia> ts = TimeSeries(t, x)\njulia> ts isa typeintersect(UnivariateTimeSeries, RegularTimeSeries)\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.TimeSeries-Tuple{Any, Function}","page":"Home","title":"TimeseriesTools.TimeSeries","text":"TimeSeries(t, f::Function)\n\nConstruct a time series by mapping a function f over the time points t.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools._energyspectrum","page":"Home","title":"TimeseriesTools._energyspectrum","text":"_energyspectrum(x::RegularTimeSeries, f_min=samplingrate(x)/min(length(x)÷4, 1000))\n\nComputes the energy spectrum of a regularly sampled time series x with an optional minimum frequency f_min.\n\n\n\n\n\n","category":"function"},{"location":"#TimeseriesTools._energyspectrum-Tuple{AbstractDimArray{T, 2, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:DimensionalData.Dimensions.TimeDim, B} where {T, B}, Vararg{Any}}","page":"Home","title":"TimeseriesTools._energyspectrum","text":"_energyspectrum(x::RegularTimeSeries, f_min=0)\n\nComputes the energy spectrum of a time series using the fast Fourier transform.\n\nIf f_min > 0, the energy spectrum is calculated for windows of the time series determined by f_min,  the minimum frequency that will be resolved in the spectrum. If f_min > 0, the second dimension of the output will correspond to the windows. For an averaged periodogram, see energyspectrum.\n\nIf the input time series is a UnitfulTimeSeries, the frequency will also have units. Moreover if the elements of x are unitful, so are the elements of the spectrum.\n\nExamples\n\njulia> using TimeseriesTools\njulia> t = range(0.0, stop=1.0, length=1000);\njulia> x = sin.(2 * π * 5 * t);\njulia> ts = RegularTimeSeries(t, x);\njulia> S = _energyspectrum(ts);\njulia> S isa MultivariateSpectrum\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools._powerspectrum-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:DimensionalData.Dimensions.TimeDim, B} where {T, N, B}, Vararg{Any}}","page":"Home","title":"TimeseriesTools._powerspectrum","text":"_powerspectrum(x::AbstractTimeSeries, f_min=samplingrate(x)/min(length(x)÷4, 1000); kwargs...)\n\nComputes the power spectrum of a time series x in Welch periodogram windows. Note that the _powerspectrum is simply the _energyspectrum divided by the duration of each window. See _energyspectrum.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.centralderiv!-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:(DimensionalData.Dimensions.TimeDim{<:DimensionalData.Dimensions.LookupArrays.Sampled{T, R} where {T, R<:AbstractRange}}), B} where {T, N, B}}","page":"Home","title":"TimeseriesTools.centralderiv!","text":"centralderiv!(x::RegularTimeSeries; kwargs...)\n\nCompute the central derivative of a regular time series x, in-place. See centraldiff! for available keyword arguments.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.centralderiv-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:(DimensionalData.Dimensions.TimeDim{<:DimensionalData.Dimensions.LookupArrays.Sampled{T, R} where {T, R<:AbstractRange}}), B} where {T, N, B}}","page":"Home","title":"TimeseriesTools.centralderiv","text":"centralderiv(x::RegularTimeSeries)\n\nCompute the central derivative of a regular time series x. See centraldiff for available keyword arguments. Also c.f. centralderiv!.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.centraldiff!-Tuple{AbstractDimArray{T, 1, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:(DimensionalData.Dimensions.TimeDim{<:DimensionalData.Dimensions.LookupArrays.Sampled{T, R} where {T, R<:AbstractRange}}), B} where {T, B}}","page":"Home","title":"TimeseriesTools.centraldiff!","text":"centraldiff!(x::RegularTimeSeries; dims=Ti, grad=-)\n\nCompute the central difference of a regular time series x, in-place. The first and last elements are set to the forward and backward difference, respectively. The dimension to perform differencing over can be specified as dims, and the differencing function can be specified as grad (defaulting to the euclidean distance, -)\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.centraldiff-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:DimensionalData.Dimensions.TimeDim, B} where {T, N, B}}","page":"Home","title":"TimeseriesTools.centraldiff","text":"centraldiff(x::RegularTimeSeries; dims=Ti, grad=-)\n\nCompute the central difference of a regular time series x. The first and last elements are set to the forward and backward difference, respectively. The dimension to perform differencing over can be specified as dims, and the differencing function can be specified as grad (defaulting to the euclidean distance, -) See centraldiff!.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.closeneighbours-Union{Tuple{T}, Tuple{AbstractVector{T}, AbstractVector{T}}} where T<:Real","page":"Home","title":"TimeseriesTools.closeneighbours","text":"closeneighbours(x, y; Δt)\n\nConstructs a sparse matrix of distances between neighbouring spikes in two sorted spike trains.\n\nArguments\n\nx: A sorted array representing the first spike train.\ny: A sorted array representing the second spike train.\nΔt: The maximum time difference allowed for two spikes to be considered neighbours.\n\nReturns\n\nA sparse matrix D where D[i, j] represents the distance between the i-th spike in x and the j-th spike in y, for pairs of spikes within Δt of each other.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.colorednoise-Tuple{AbstractRange, Vararg{Any}}","page":"Home","title":"TimeseriesTools.colorednoise","text":"colorednoise(ts::AbstractRange; α=2.0)\n\nGenerate a colored-noise time series with a specified power-law exponent α on the given times ts.\n\nArguments\n\nts: An AbstractRange representing the time range of the generated noise.\nα: The power-law exponent of the colored noise, which will have a spectrum given by 1/f^α. Defaults to 2.0.\n\nReturns\n\nA TimeSeries containing the generated colored noise.\n\nExample\n\njulia> using TimeseriesTools\njulia> pink_noise = colorednoise(1:0.01:10; α=1.0)\njulia> pink_noise isa RegularTimeSeries\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.convertconst-Tuple{Number, Quantity}","page":"Home","title":"TimeseriesTools.convertconst","text":"TimeseriesTools.convertconst(c::Number, u::Unitful.Quantity)\n\nConverts a constant c to have the same units as u.\n\nExamples\n\njulia> using Unitful;\njulia> c = 5;\njulia> u = 3u\"s\";\njulia> converted_c = TimeseriesTools.convertconst(c, u);\njulia> typeof(converted_c) == typeof(u)\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.dimunit-Tuple{AbstractDimArray, Any}","page":"Home","title":"TimeseriesTools.dimunit","text":"dimunit(x::UnitfulTimeSeries, dim)\n\nReturns the unit associated with the specified dimension dim of a UnitfulTimeSeries.\n\nExamples\n\njulia> using Unitful;\njulia> t = 1:100;\njulia> x = rand(100);\njulia> ts = TimeSeries(t, x, u\"ms\");\njulia> TimeseriesTools.dimunit(ts, Ti) == u\"ms\"\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.duration-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:DimensionalData.Dimensions.TimeDim, B} where {T, N, B}}","page":"Home","title":"TimeseriesTools.duration","text":"duration(x::AbstractTimeSeries)\n\nReturns the duration of the AbstractTimeSeries x.\n\nExamples\n\njulia> t = 1:100;\njulia> x = rand(100);\njulia> ts = TimeSeries(t, x);\njulia> TimeseriesTools.duration(ts) == 99\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.energyspectrum-Tuple{Any, Vararg{Any}}","page":"Home","title":"TimeseriesTools.energyspectrum","text":"energyspectrum(x::RegularTimeSeries, f_min=0; kwargs...)\n\nComputes the average energy spectrum of a regularly sampled time series x. f_min determines the minimum frequency that will be resolved in the spectrum. See _energyspectrum.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.frequnit-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:Freq, B} where {T, N, B}}","page":"Home","title":"TimeseriesTools.frequnit","text":"frequnit(x::UnitfulSpectrum)\n\nReturns the frequency units associated with a UnitfulSpectrum.\n\nExamples\n\njulia> using Unitful;\njulia> t = 1:100;\njulia> x = rand(100);\njulia> ts = TimeSeries(t, x, u\"ms\");\njulia> sp = fft(ts);  # assuming fft returns a UnitfulSpectrum\njulia> frequnits(sp) == u\"Hz\"\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.gammarenewal!-Tuple{AbstractVector, Any, Any}","page":"Home","title":"TimeseriesTools.gammarenewal!","text":"gammarenewal!(spikes, α, θ; t0 = randn() * α / θ, kwargs...)\n\nGenerate a sequence of gamma-distributed renewal spikes.\n\nArguments:\n\nspikes::AbstractVector: The vector to store the generated spikes.\nα: The shape parameter of the gamma distribution.\nθ: The scale parameter of the gamma distribution.\nt0: The initial time of the spike train. Defaults to a random value drawn from a normal distribution with mean of 0 and standard deviation equal to the mean firing rate.\nkwargs...: Additional keyword arguments to be passed to pointprocess!.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.gammarenewal-Tuple{Any, Vararg{Any}}","page":"Home","title":"TimeseriesTools.gammarenewal","text":"gammarenewal(N, α, θ; t0)\n\nGenerate a spike train with inter-spike intervals drawn from a Gamma process.\n\nArguments\n\nN: Number of spikes to generate.\nα: Shape parameter of the gamma distribution (equivalent to the mean ISI divided by the\n\nFano factor).\n\nθ: Scale parameter of the gamma distribution (equivalent to the Fano factor).\nt0: The initial time of the spike train, prior to the first sampled spike. Defaults to a\n\nrandom value drawn from a normal distribution with mean of 0 and standard deviation equal  to the mean firing rate.\n\nReturns\n\nA SpikeTrain containing the generated spike times.\n\nSee also gammarenewal!.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.pointprocess!-Tuple{Any, Distributions.Distribution}","page":"Home","title":"TimeseriesTools.pointprocess!","text":"pointprocess!(spikes, D::Distribution; rng = Random.default_rng(), t0 = 0.0)\n\nSimulate a point process by sampling inter-spike intervals from a given distribution.\n\nArguments\n\nspikes: An array to store the generated spike times.\nD::Distribution: The distribution from which to sample inter-spike intervals.\nrng: (optional) The random number generator to use. Defaults to Random.default_rng().\nt0: (optional) The initial time. Defaults to 0.0.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.powerspectrum-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:DimensionalData.Dimensions.TimeDim, B} where {T, N, B}, Vararg{Any}}","page":"Home","title":"TimeseriesTools.powerspectrum","text":"powerspectrum(x::AbstractTimeSeries, f_min=samplingrate(x)/min(length(x)÷4, 1000); kwargs...)\n\nComputes the average power spectrum of a time series x using the Welch periodogram method.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.rectifytime-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:(DimensionalData.Dimensions.TimeDim{<:DimensionalData.Dimensions.LookupArrays.Sampled{T, R} where {T, R<:(AbstractVector)}}), B} where {T, N, B}}","page":"Home","title":"TimeseriesTools.rectifytime","text":"rectifytime(X::IrregularTimeSeries; tol = 6, zero = false)\n\nRectifies the time values of an IrregularTimeSeries. Checks if the time step of the input time series is approximately constant. If it is, the function rounds the time step and constructs a RegularTimeSeries with range time indices. If the time step is not approximately constant, a warning is issued and the rectification is skipped.\n\nArguments\n\nX::IrregularTimeSeries: The input time series.\ntol::Int: The number of significant figures for rounding the time step. Default is 6.\nzero::Bool: If true, the rectified time values will start from zero. Default is false.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.samplingperiod-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:(DimensionalData.Dimensions.TimeDim{<:DimensionalData.Dimensions.LookupArrays.Sampled{T, R} where {T, R<:AbstractRange}}), B} where {T, N, B}}","page":"Home","title":"TimeseriesTools.samplingperiod","text":"samplingperiod(x::RegularTimeSeries)\n\nReturns the sampling period (step size) of a regularly sampled RegularTimeSeries.\n\nExamples\n\njulia> t = 1:100;\njulia> x = rand(100);\njulia> rts = TimeSeries(t, x);\njulia> samplingperiod(rts) == 1\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.samplingrate-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:(DimensionalData.Dimensions.TimeDim{<:DimensionalData.Dimensions.LookupArrays.Sampled{T, R} where {T, R<:AbstractRange}}), B} where {T, N, B}}","page":"Home","title":"TimeseriesTools.samplingrate","text":"samplingrate(x::RegularTimeSeries)\n\nReturns the sampling rate (inverse of the step size) of a regularly sampled RegularTimeSeries.\n\nExamples\n\njulia> t = 1:100;\njulia> x = rand(100);\njulia> rts = TimeSeries(t, x);\njulia> samplingrate(rts) == 1\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.stitch-Tuple{AbstractDimArray{T, 1, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:(DimensionalData.Dimensions.TimeDim{<:DimensionalData.Dimensions.LookupArrays.Sampled{T, R} where {T, R<:AbstractRange}}), B} where {T, B}, AbstractDimArray{T, 1, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:(DimensionalData.Dimensions.TimeDim{<:DimensionalData.Dimensions.LookupArrays.Sampled{T, R} where {T, R<:AbstractRange}}), B} where {T, B}}","page":"Home","title":"TimeseriesTools.stitch","text":"stitch(x, args...)\n\nStitch multiple time series together by concatenatign along the time dimension generating new contiguous time indices. The time series must be of the same type (UnivariateRegular, MultivariateRegular, or AbstractArray), and the sampling period and dimensions of the data arrays must match. If the arguments are `MultivariateRegular, they must have the same dimensions (except for the time dimension).\n\nArguments\n\nX: The first time series.\nargs...: Additional time series.\n\nReturns\n\nA new time series containing the concatenated data.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.stoic-Tuple{Any, Any}","page":"Home","title":"TimeseriesTools.stoic","text":"stoic(a, b; kpi = npi, σ = 0.025, Δt = σ * 10)\n\nCompute the spike-train overlap-integral coefficient between two spike trains, after normalizing both convolutions to unit energy\n\nArguments\n\na: Spike train a.\nb: Spike train b.\nkpi: Kernel product integral, a function of the distance between two spikes. Default is npi, the integral of two gaussians with equal variance at a given distance from each other.\nσ: Width parameter of the kernel. For npi, this is the width of the unit-mass Gaussian kernels. Default is 0.025.\nΔt: Time window for considering spikes as close. Default is σ * 10.\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.sttc-Tuple{Any, Any}","page":"Home","title":"TimeseriesTools.sttc","text":"sttc(a, b; Δt = 0.025)\n\nThe spike-time tiling coefficient, a measure of correlation between spike trains [1].\n\nArguments\n\na::Vector{<:Real}: A sorted vector of spike times.\nb::Vector{<:Real}: A second sorted vector of spike times .\nΔt::Real=0.025: The time window for calculating the STTC.\n\nReturns\n\nsttc::Real: The STTC value.\n\nReferences\n\n[1] [Cutts & Eglen 2014](https://doi.org/10.1523%2FJNEUROSCI.2767-14.2014)\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.times-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:DimensionalData.Dimensions.TimeDim, B} where {T, N, B}}","page":"Home","title":"TimeseriesTools.times","text":"times(x::AbstractTimeSeries)\n\nReturns the time indices of the AbstractTimeSeries x.\n\nExamples\n\njulia> t = 1:100;\njulia> x = rand(100);\njulia> ts = TimeSeries(t, x);\njulia> times(ts) == t\n\n\n\n\n\n","category":"method"},{"location":"#TimeseriesTools.timeunit-Tuple{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:DimensionalData.Dimensions.TimeDim, B} where {T, N, B}}","page":"Home","title":"TimeseriesTools.timeunit","text":"timeunit(x::UnitfulTimeSeries)\n\nReturns the time units associated with a [UnitfulTimeSeries].\n\nExamples\n\njulia> using Unitful;\njulia> t = 1:100;\njulia> x = rand(100);\njulia> ts = TimeSeries(t, x, u\"ms\");\njulia> timeunit(ts) == u\"ms\"\n\n\n\n\n\n","category":"method"},{"location":"#Unitful.unit-Tuple{Union{AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:Freq, B} where {T, N, B}, AbstractDimArray{T, N, <:Tuple{A, Vararg{DimensionalData.Dimensions.Dimension}} where A<:DimensionalData.Dimensions.TimeDim, B} where {T, N, B}}}","page":"Home","title":"Unitful.unit","text":"unit(x::AbstractArray)\n\nReturns the units associated with the elements of an UnitfulTimeSeries or UnitfulSpectrum.\n\nExamples\n\njulia> using Unitful;\njulia> t = 1:100;\njulia> x = rand(100);\njulia> ts = TimeSeries(t, x, u\"ms\")*u\"V\";\njulia> unit(ts) == u\"V\"\n\n\n\n\n\n","category":"method"}]
}
