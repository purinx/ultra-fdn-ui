# Design.md

ダークトーン × ミントグリーン(teal)アクセントの、ハードウェア/プラグインライクなビジュアル言語を扱います。

## 1. デザインコンセプト

- **トーン**: 暗いグラファイト/チャコール系の筐体に、光るミントグリーンのアクセントを乗せたプロオーディオ機材の質感
- **立体感**: ノブやパネルにベベル（内側/外側シャドウ）を用いて、実機のような凹凸を表現する
- **情報階層**: モジュール名（ロゴ）を最も目立たせ、パラメータラベルは控えめなグレーで統一

## 2. デザイントークン

### 2.1 カラー

| トークン名 | 値 | 用途 |
|---|---|---|
| `color-bg-canvas` | `#15171a` | 画面全体の背景（最背面） |
| `color-bg-canvas-glow` | `radial-gradient(ellipse at 50% 30%, rgba(45,212,191,0.25), transparent 60%)` | 背景の波状ミントグロー装飾 |
| `color-panel-bg` | `linear-gradient(180deg, #3c3f3d 0%, #2c2e2c 100%)` | プラグイン本体パネルの背景 |
| `color-panel-border` | `rgba(255,255,255,0.06)` | パネル外周のハイライト境界線 |
| `color-panel-shadow` | `rgba(0,0,0,0.5)` | パネル外側のドロップシャドウ |
| `color-groupbox-border` | `rgba(94,234,212,0.35)` | Early Reflections等、グループ枠線 |
| `color-groupbox-label` | `#a9b0ac` | グループラベルテキスト |
| `color-knob-body-inner` | `#1c1d1c` | ノブ中心のダークグラデ始点 |
| `color-knob-body-outer` | `#3d3f3d` | ノブ外周のダークグラデ終点 |
| `color-knob-bezel` | `rgba(255,255,255,0.08)` | ノブ外周のハイライトリム |
| `color-accent-mint` | `#5eead4` | アクティブ値・インジケーター・メーター発光色 |
| `color-accent-mint-dim` | `rgba(94,234,212,0.25)` | 非アクティブ目盛・弱発光 |
| `color-accent-mint-glow` | `rgba(94,234,212,0.45)` | アクセント要素のbox-shadowグロー |
| `color-text-primary` | `#e8ebe9` | ロゴ・見出しテキスト |
| `color-text-secondary` | `#9aa19d` | パラメータラベル・サブテキスト |
| `color-text-muted` | `#6b716e` | 非活性・補助テキスト |
| `color-meter-fill-top` | `#99f6e4` | メーター上部（ピーク側） |
| `color-meter-fill-bottom` | `#0d9488` | メーター下部（低レベル側） |
| `color-meter-track` | `#232523` | メーター未点灯部分 |
| `color-control-bg` | `#26282a` | ボタン・プリセットフィールドの背景 |
| `color-control-border` | `rgba(255,255,255,0.08)` | ボタン・入力欄の境界線 |
| `color-divider` | `rgba(255,255,255,0.08)` | セクション区切りの罫線（Spectrum Analyzer下、Matrix行の上など） |
| `color-accent-amber` | `#f0b86e` | Matrix Weightsヒートマップの負の値 |
| `color-accent-amber-dim` | `rgba(240,184,110,0.25)` | アンバー系の弱発光 |
| `color-toggle-track-off` | `#26282a` | ToggleSwitchのOFFトラック |

### 2.2 タイポグラフィ

| トークン名 | 値 | 用途 |
|---|---|---|
| `font-family-display` | 幅広・幾何学的なサンセリフ（例: `"Barlow Condensed", "Oswald", sans-serif`） | モジュールロゴ |
| `font-family-ui` | 標準サンセリフ（例: `"Inter", "Helvetica Neue", sans-serif`） | ラベル・ボタン・本文 |
| `font-size-logo` | `28px` / `font-weight: 700` | モジュール名ロゴ |
| `font-size-logo-sub` | `10px` / `letter-spacing: 0.15em` / `text-transform: uppercase` | ロゴ下のサブタイトル |
| `font-size-label` | `11px` / `font-weight: 500` | ノブ下のパラメータ名 |
| `font-size-groupbox-label` | `10px` / `letter-spacing: 0.08em` / `text-transform: uppercase` | グループ枠のタイトル |
| `font-size-preset` | `13px` / `font-weight: 600` | プリセット名表示 |
| `font-size-button` | `11px` / `font-weight: 600` / `letter-spacing: 0.04em` | ボタンラベル |

### 2.3 スペーシング・サイズ

| トークン名 | 値 | 用途 |
|---|---|---|
| `space-panel-padding-x` | `32px`（実装は`px-8`） | パネル内側の左右の余白 |
| `space-panel-padding-y` | `40px`（実装は`py-10`） | パネル内側の上下の余白。`max-height: 800px`の枠を目一杯使うため、横方向より広めに取る |
| `space-section-gap-x` | `48px` | パネル内の主要セクション間（横方向）の間隔。Loss表示⇔Spectrum Analyzer⇔メーター、Matrix設定⇔MatrixWeightsなど、性質の異なるセクション同士 |
| `space-section-gap-y` | `28px` | パネル内の主要セクション間（縦方向）の間隔。区切り線（Divider）を挟むブロック同士 |
| `space-side-column-width` | `340px` | パネル左端に来る「補助情報列」（Loss表示列、Matrix設定のDropdown列）の共通幅。**行をまたいで同じ幅に揃えることで、列の左端が縦に一直線に並ぶ**（下記アライメント原則参照） |
| `space-knob-gap-inner` | `32px` | ひとまとまりのノブ群の中での横間隔（GroupBox内、Decay/Mixクラスタ内など） |
| `space-knob-row-gap-x` | `36px` | 「ツマミの段」で`flex-wrap`時にフォールバックとして使う横間隔（通常は後述の通り`justify-between`で自動計算されるため、1行に収まる限りは実際にはこれより広い間隔になる） |
| `space-groupbox-pad-top` | `22px` | GroupBoxの上パディング（ラベルが枠線に重なる分、下より広めに取る） |
| `space-groupbox-pad-x` | `24px` | GroupBoxの左右パディング |
| `space-groupbox-pad-bottom` | `18px` | GroupBoxの下パディング |
| `size-knob-xl` | `80px` | `Decay`/`Mix`など、パネル最重要パラメータ用ノブ直径。ラベル/数値のフォントサイズも他サイズより大きくする（後述） |
| `size-knob-lg` | `64px` | 汎用の大きめノブ直径（単体使用時のデフォルト） |
| `size-knob-md` | `56px` | GroupBox内で使う標準ノブ直径 |
| `size-knob-sm` | `48px` | GroupBox内など、ノブ数が多いクラスタ用の縮小ノブ直径 |
| `size-knob-label-height` | `28px` | ノブのラベル表示領域の**固定高さ**（後述） |
| `size-meter-width` | `10px` | レベルメーター幅 |
| `size-meter-height` | `160px` | レベルメーター高さ |
| `radius-panel` | `16px` | パネル本体の角丸 |
| `radius-groupbox` | `8px` | グループ枠の角丸 |
| `radius-control` | `4px` | ボタン・入力欄の角丸 |
| `radius-preset-nav` | `4px` | プリセット送りボタンの角丸 |

#### 高さ揃え・アライメントのルール

パラメータ名によってラベルが1行（`Delay`）だったり2行（`Predelay\nFeedback`）だったりするため、素朴に実装すると同じ`size`のノブでも全高がラベルの行数分ブレてしまい、隣り合う`GroupBox`（Delay / Modulation / Filter）の高さが揃わず「洗練されていない」印象になる。これを防ぐため:

- `Knob`のラベル領域は`size-knob-label-height`（28px＝2行分）で**固定**し、1行のときは内容を上下中央寄せする。これによりラベルの行数に関わらず、同じ`size`のノブは常に同じ全高になる
- `GroupBox`は`items-start`で子要素（ノブ）を上揃えし、パディングも固定値（`space-groupbox-pad-*`）を使う。ノブの全高が揃っていれば、内容量に関わらずGroupBox自体の高さも自動的に揃う
- 複数の`GroupBox`を横に並べる行（例: Delay / Modulation / Filter）は`items-start`のflexで揃え、ノブ数が異なるグループ同士でも上端・高さ双方が一致する
- セクション間の間隔は「異なる種類のセクション間は`space-section-gap-x`（横）/ `space-section-gap-y`（縦）、同じ種類のノブ系コンポーネントを並べる“ツマミの段”内は`space-knob-row-gap-x`、グループ内の細かい間隔は`space-knob-gap-inner`」の3段階に統一し、場当たり的な`gap`値を使わない

**原則: アライメントは絶対に揃えること。上下・左右で不均一な余白を作らないこと。**

- 同じ行・同じ段に並ぶ要素は、高さの基準となる列（内容量が多い方、または固定サイズの方）に他方を**明示的に揃える**。中央揃え（`self-center` / `items-center`）にするのか、上端揃え（`items-start`）にするのか、下端揃え（`items-end`）にするのかを都度意図して選び、「たまたまそう見える」状態を放置しない
  - 例: ノブ単体をGroupBoxの高さに揃えたいときは`self-center`（[Decay]/[Mix]と`GroupBox`の行）
  - 例: 可変コンテンツをコンテナいっぱいに引き伸ばして揃えたいときは`items-stretch` + 子要素`h-full`（`SpectrumAnalyzer`⇔Loss表示/メーター列、`MatrixWeights`⇔Dropdown列）
- 「揃っていない」状態を偶然の産物として放置しない。実装後は必ずブラウザで確認し、要素の上端・下端・中心線が意図通りに揃っているか、特定の列の下にだけ余白が残っていないかを目視でチェックする
- 内容量の異なる兄弟要素を横に並べる場合、短い方を単に浮かせたまま（top揃えで放置）にしない。「揃える（中央揃え等）」か「伸ばして埋める（stretch）」のどちらかを必ず選択する。中途半端に余白として残すのは禁止

**原則: 段（行）は基本的に横幅を目一杯使う。固定`gap`で詰めて片側に余白を残すのではなく、`justify-content: space-between`で要素同士を横幅いっぱいに広げて配置する。**

- 複数のブロックを1つの段に並べるとき、コンテンツの合計幅がパネル幅より狭い場合は、`gap`を固定値にして左に寄せたまま残りを空けるのではなく、`justify-between`でブロック間の間隔そのものを伸縮させてパネル幅いっぱいに配置する（例: 「ツマミの段」の`Decay/Mix`クラスタと3つの`GroupBox`）
- 固定`gap`（`space-knob-row-gap-x`等）は、`flex-wrap`で折り返しが発生した場合のフォールバック間隔としてのみ使う。1行に収まっている限りは`justify-between`側の自動間隔が優先される
- 逆に、意図的に左右どちらかへ寄せたい・グルーピングを明確にしたい場合（例: Loss表示+トグルを左端にまとめる、Preset操作をひとまとまりにする等）は、その旨が分かるように隣接して配置し、"空いた場所に偶然余白が残る"状態とは区別する

#### 余白を残さないための方針

パネル幅は`max-width: 1200px`に固定しているため、パラメータ数の多いセクション（8つのノブなど）を1行に収めようとすると単純な等倍縮小では収まらないことがある。その場合は次の優先順位で調整する:

1. まず`justify-between`で横幅いっぱいに配置できないか検討する（上記の原則）
2. それでも窮屈な場合は間隔（`space-knob-gap-inner` / `space-groupbox-pad-x`）を詰める
3. それでも収まらない場合、優先度の低いパラメータ群のノブサイズを`size-knob-md`→`size-knob-sm`に落とす（主役の`Decay`/`Mix`は`lg`のまま維持し、情報階層を保つ）
4. 行の途中半端な位置で折り返して余白ができるくらいなら、詰めて1行に収める方を優先する

### 2.4 エフェクト

| トークン名 | 値 | 用途 |
|---|---|---|
| `shadow-panel-outer` | `0 24px 60px rgba(0,0,0,0.5)` | パネル全体の浮き上がり |
| `shadow-panel-inset` | `inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.4)` | パネル上下のベベル |
| `shadow-knob` | `0 2px 4px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1)` | ノブの立体感 |
| `glow-accent` | `0 0 8px var(--color-accent-mint-glow)` | アクティブ値インジケーター・点灯メーターの発光 |
| `transition-control` | `120ms ease-out` | ノブ回転・ボタン状態変化のトランジション |
| `gradient-spectrum-fill` | `linear-gradient(180deg, rgba(94,234,212,0.25), rgba(94,234,212,0.02))` | Spectrum Analyzerのエリア塗りつぶし |
| `gradient-matrix-scale` | `linear-gradient(180deg, mint 0%, #232523 50%, amber 100%)` | Matrix Weightsのカラースケール凡例 |

## 3. コンポーネント仕様

### 3.1 `Knob`（ロータリーノブ）

パラメータ1つを表す回転ノブ。

- **構成要素**
  - ノブ本体（`color-knob-body-inner` → `color-knob-body-outer` の放射状グラデ、`color-knob-bezel` の外周リム）
  - 値インジケーター（中心から伸びる短いポインターライン、白〜`color-accent-mint`）
  - 周囲のドット目盛（270°スイープ、非アクティブ = `color-accent-mint-dim`、アクティブ範囲 = `color-accent-mint` + `glow-accent`）
  - 下部ラベル（`font-size-label`、`color-text-secondary`。`\n`で複数行ラベルにも対応。表示領域は`size-knob-label-height`で固定し、1行/2行どちらでも同じ`size`のノブは全高が揃う）
  - さらにその下、`valueLabel`（任意）を指定するとフォーマット済みの数値（例: `3.20 s`、`120 Hz`）を`color-accent-mint`で表示
- **バリアント**: `size` = `xl`(80px) / `lg`(64px) / `md`(56px) / `sm`(48px)。ノブ本体の直径だけでなく、下部ラベル・`valueLabel`のフォントサイズも`size`に応じて拡大縮小する（`xl`はラベル18px/数値22px、`lg`はラベル16px/数値17px、`md`はラベル15px/数値16px、`sm`はラベル14px/数値14px）。大きいノブほど文字だけ小さいままだと不釣り合いに見えるため、サイズと文字は必ず連動させる
- **状態**: `default`, `hover`（ベゼルがわずかに明るくなる）, `active/dragging`（グローが強まる）, `disabled`（彩度を落とす）
- **Props例**: `label`, `value`, `min`, `max`, `defaultValue`, `size`, `valueLabel`, `onChange`
- ノブ本体を包む外枠は`width`ではなく`min-width`（=ノブ直径）を使う。`valueLabel`（例: `8000 Hz`）はフォントサイズを上げるとノブ本体より横幅が必要になることがあり、固定`width`だと折り返してしまう。`min-width` + `valueLabel`側の`whitespace-nowrap`で、ノブより文字が横に広がっても折り返さないようにする

### 3.2 `GroupBox`（パラメータグループ枠）

関連するノブ群（例: Delay / Modulation / Filter）を囲む枠。

- 角丸の薄い枠線（`color-groupbox-border`、`radius-groupbox`）
- 左上に小さなラベル（枠線を分断する形で配置、`font-size-groupbox-label`、背景は`color-groupbox-label-bg`でパネル背景を隠す）
- パディングは`space-groupbox-pad-top` / `space-groupbox-pad-x` / `space-groupbox-pad-bottom`で固定
- 内部に `Knob` を複数、`items-start`・`space-knob-gap-inner`間隔で配置するコンテナ。`Knob`側の高さが揃っている前提のため、GroupBox自体の高さもノブ数に関わらず自動的に揃う

### 3.3 `LevelMeter`（レベルメーター）

垂直方向のセグメント式ピークメーター。

- トラック背景 `color-meter-track`、点灯セグメントは下→上に `color-meter-fill-bottom` → `color-meter-fill-top` のグラデーション
- 上端に近いセグメントほど明るく発光（`glow-accent`）
- 下部に短いラベル（`I` / `O` など）
- **Props例**: `level`（0-1）, `label`, `orientation`（既定は縦）

### 3.4 `ModuleLockup`（ロゴ/モジュール名）

- 太字・幅広フォントの製品名（`font-size-logo`）
- 直下に小さくトラッキングを広げたサブタイトル（`font-size-logo-sub`）
- 右詰め・パネル右側に配置される想定
- `title` / `subtitle` はいずれもoptional。未指定時は何も描画しない

### 3.5 `PresetBar`（プリセット操作バー）

パネル下部の帯状コントロール群。

- 左: `◀` / `▶` のプリセット送りボタン（`radius-preset-nav`、正方形に近い小型ボタン）
- プリセット名表示フィールド（`color-control-bg` の角丸インセット枠、テキストは `color-accent-mint` で強調表示、`font-size-preset`）
- 新規プリセット名入力欄（`saveName` / `onSaveNameChange`。`Save`ボタンと組み合わせて「名前を付けて保存」を表現）
- `Save` / `Init` ボタン（`color-control-bg` 背景、`color-control-border`）
- `Bypass` トグルボタン（オン時に `color-accent-mint` 文字色＋グロー）
- 最右: ブランドロゴ（`brandName`、optional。未指定時は非表示）

### 3.6 `Dropdown`

- ラベル（任意）+ ネイティブ`<select>`をラップしたセレクトボックス。`color-control-bg`背景・`color-control-border`枠線、右端にシェブロンアイコン。hover時に枠線が`color-accent-mint`に変化
- Matrix関連の設定（Matrix種別、Delay Lines数、Matrix Stages数）に使用。複数並べる場合は横並びより**縦積み**を優先し、選択肢のラベル（例:「Random-angle Hadamard」）が省略されない横幅を確保する
- **Props**: `label`, `options({label, value}[])`, `value`, `onChange`, `disabled`

### 3.7 `ToggleSwitch`

- ラベル + ピル型のトグル。OFF時は`color-toggle-track-off`のダークトラック、ON時は`color-accent-mint-dim`トラック＋`glow-accent`
- トラック28×48px・つまみ18×18px。**つまみのサイズはトラックの内寸（トラック幅/高さ − border − padding）に正確に一致させる**。ここがズレるとつまみが枠からはみ出して見える（実際に一度この不具合が発生したため、サイズ変更時は要注意）
- `Infinite` / `Freeze` のような二値パラメータに使用
- **Props**: `label`, `checked`, `onChange`, `disabled`

### 3.8 `SpectrumAnalyzer`

- 対数周波数軸（20Hz〜20kHz）× dB軸（0〜-100dB）のスペクトラム表示。線・エリア塗り・HPF/LPFマーカーはすべてミント系
- 内部の`<svg>`は`viewBox`固定＋`preserveAspectRatio="none"`＋`flex-1`（親が`h-full`）で構成し、**縦横比を保たず親コンテナの高さいっぱいに伸縮する**。`PluginPanel`では隣接する列（Loss表示・I/Oメーター）と`items-stretch`で高さを揃えることで、他の列と同じ高さまでグラフを拡大している
- 実際の音声解析は行わず、**props経由で任意のデータに差し替え可能**:
  - `curve?: number[]`（HPF/LPFのエンベロープ線。未指定時は`hpfHz`/`lpfHz`から4次ロールオフを近似計算した曲線をデフォルト表示）
  - `noise?: number[]`（背景のギザギザしたノイズフロア。未指定時は決定的な疑似乱数で生成）
  - `hpfHz`, `lpfHz`（カットオフ周波数。カーブ上にマーカー＋ラベル表示）
- 見出し行に「Preview spectrum — HPF + LPF」の凡例を表示

### 3.9 `MatrixWeights`

- FDNのフィードバック行列の重みを表すヒートマップ。セルは`-1〜+1`の値を「アンバー(-1) → ダーク(0) → ミント(+1)」で色分け（`gradient-matrix-scale`）
- 右側に縦方向のカラースケール凡例（`+1` / `0` / `-1`）
- `data?: number[][]` をpropsで受け取り、**未指定時は決定的な疑似乱数パターンをデフォルト表示**
- ヒートマップ本体・凡例ともに`h-full`で構成し、**幅・高さいずれも親コンテナいっぱいに伸縮する**（固定サイズを持たない）。`PluginPanel`では下段で`flex-1`（横幅）+ `items-stretch`（縦の高さをDropdown列に合わせる）として、隣接するMatrix設定と同じ高さ・残り幅いっぱいまで広げている

### 3.10 `StatReadout`

- ラベル + infoアイコン + 数値、または簡易スパークライン（`trend?: number[]`、ミント色）のどちらかを表示
- `Spectral Loss`（トレンド表示）/ `Sparsity Loss`（数値表示）に使用
- スパークラインは`viewBox`固定＋`preserveAspectRatio="none"`＋`w-full h-11`で、**親コンテナの横幅いっぱいに伸縮する**（`SpectrumAnalyzer`/`MatrixWeights`と同じ考え方）。固定px幅の小さなグラフとして埋もれさせない

### 3.11 `PluginPanel`（外枠コンテナ）

- 上記コンポーネントすべてを内包する角丸パネル（`radius-panel`、`color-panel-bg`、`shadow-panel-outer` + `shadow-panel-inset`）
- 背景に `color-bg-canvas` と `color-bg-canvas-glow`（波状のミントグローを模したデコレーション）を敷く
- レイアウト: 上段に `StatReadout`（Spectral/Sparsity Loss）+ `SpectrumAnalyzer` + I/Oメーター + ロゴ、中段（ツマミの段）に Decay/Mix ノブと `GroupBox` で束ねたパラメータノブ群（Delay系 / Modulation系 / Filter系）を1行に集約、下段に Matrix設定（Dropdown×3、縦積み）+ `MatrixWeights` + `ToggleSwitch`（Infinite/Freeze、右端）、最下段に `PresetBar`
- 上段・下段はともに`items-stretch`で揃え、`SpectrumAnalyzer`は上段の左列（Loss表示）・右列（メーター）と、`MatrixWeights`は下段のMatrix設定（Dropdown縦積み）と、それぞれ同じ高さまで縦に伸びる。左右で高さの基準となる列（Loss表示 / Matrix設定）は固定幅・固定コンテンツ量、可変側（SpectrumAnalyzer / MatrixWeights）が`h-full`でそれに合わせる、という関係を統一ルールとする
- 上段の左列（`StatReadout`列）と下段の左列（`Dropdown`列）はどちらも`space-side-column-width`（340px）で共通化し、行をまたいで左端が一直線に揃う。上段右端のI/Oメーター+ロゴ列も、内容量が異なるため`self-center`で行の高さに対して上下中央揃えにする（top揃えのまま放置すると片側に余白が残るため）
- `Decay`/`Mix`クラスタと最初の`GroupBox`（Delay）の間隔は、`justify-between`任せにすると内容量次第で詰まりすぎることがあるため、クラスタ側に`pr-6`の固定余白を追加して最低限の間隔を保証している。ただし行全体の間隔（`columnGap`）を固定で足すと`flex-wrap`が誘発され段が折り返って高さが跳ねるため、**行全体ではなく特定のペアだけに`padding`で余白を足す**のが安全
- 下段右端の`ToggleSwitch`列は幅150px。ラベルとスイッチは`ToggleSwitch`内部で`justify-between`のため、列幅を広げすぎるとラベル-スイッチ間が間延びする。列幅は「中身が窮屈にならない最小限」に留める
- パラメータ（Decay / Mix / Delay / Predelay / Predelay Feedback / External Feedback / Modulation / Damping / HPF / LPF）は内部状態として保持し、ノブの`valueLabel`をリアルタイム更新。HPF/LPFの値は`SpectrumAnalyzer`のカーブにもそのまま反映される
- `matrixData` / `spectralLossTrend` / `sparsityLoss` はpropsで外部から差し替え可能

#### 表示スケールについて

このコンポーネント集は実寸（`w-[1200px]`、フォント・ノブ・余白すべて本来のサイズ）で組んだうえで、`PluginPanel`の最外層だけ`transform: scale(0.5)`でコンパクトに縮小表示している（アスペクト比を保ったまま全体を1/2にする指示への対応）。実装上のポイント:

- スケール対象のパネル本体（角丸・境界線・シャドウを持つ要素）に`transform: scale(0.5)`と`transform-origin: top left`を指定し、実寸（1200px幅、可変高さ）のまま描画させる
- その外側に、**スケール後のサイズと同じ固定`width`/`height`を持つ`overflow: hidden`なラッパー**を置く。`transform`はレイアウト上の占有サイズを変えないため、この外側ラッパーがないと縮小後の見た目の周囲に実寸ぶんの余白が残ってしまう
- 中身（フォントサイズ・ノブの`min-width`など）を変更すると実寸の高さ・幅が変わるため、**ラッパーの固定`width`/`height`は都度ブラウザで実測して追従させる必要がある**（ズレると最下段の`PresetBar`が見切れる、逆に余白が残る、のどちらかが起きる）。値を変更したら必ずスクリーンショットで下端まで表示されているか確認すること

## 4. レイアウトグリッド（参考）

```
┌──────────────────────────────────────────────────────────────────┐
│ Spectral Loss     SPECTRUM ANALYZER                   [I][O] LOGO │
│ Sparsity Loss                                                     │
├──────────────────────────────────────────────────────────────────┤
│ (Decay)(Mix) ┌Delay───────────┐┌Modulation─┐┌Filter────┐          │
│              │Delay Predelay …││Mod Damp   ││HPF LPF   │          │
│              └─────────────────┘└───────────┘└──────────┘         │
├──────────────────────────────────────────────────────────────────┤
│ MATRIX          ┌──────────────────────────────────┐ Infinite    │
│ [Random-angle▾] │           MATRIX WEIGHTS          │ Freeze      │
│ DELAY LINES      │                                    │             │
│ [64          ▾] │                                    │             │
│ MATRIX STAGES    │                                    │             │
│ [4           ▾] └──────────────────────────────────┘             │
├──────────────────────────────────────────────────────────────────┤
│ Preset ◀ [Init] ▶ [name入力] [Save][Init][Bypass]                 │
└──────────────────────────────────────────────────────────────────┘
```

- 1段目: 左列（`space-side-column-width`=340px）に`StatReadout`（Spectral/Sparsity Loss）を縦積み、中央に`SpectrumAnalyzer`（`items-stretch`で左列・右列と同じ高さまで伸長）、右にI/Oメーター+ロゴ（`self-center`で行の高さに対して上下中央揃え）
- 2段目: `Decay`/`Mix`（`size-knob-xl`で最も大きく強調）と3つの`GroupBox`（Delay / Modulation / Filter、内部は`size-knob-md`）を**すべて1行に集約**した「ツマミの段」。`justify-between`で横幅いっぱいに配置し、収まりきらない場合はノブサイズを`sm`に落として対応する（上記「余白を残さないための方針」参照）
- 3段目: 左列（`space-side-column-width`=260px、1段目と共通幅）にMatrix設定（`Dropdown`×3を**縦積み**。選択肢の長いラベルが省略されないよう横幅に余裕を持たせる）、中央に`MatrixWeights`（`flex-1`で残り幅いっぱいに拡大 + `items-stretch`でDropdown列と同じ高さまで拡大）、右に`ToggleSwitch`（Infinite/Freeze、幅220px・`border-l`で区切り、`self-center`で行の高さに対して上下中央揃え）。トグル列はラベルとスイッチの間の余白にも意味があるため、詰めすぎず`justify-between`が効く幅を確保する
- 4段目: `PresetBar`

## 5. Storybookでの管理方針

- 各コンポーネント（`Knob`, `GroupBox`, `LevelMeter`, `ModuleLockup`, `PresetBar`, `Dropdown`, `ToggleSwitch`, `SpectrumAnalyzer`, `MatrixWeights`, `StatReadout`, `PluginPanel`）を個別ストーリーとして登録
- デザイントークンは1箇所（`src/styles/globals.css` の `@theme` ブロック）に集約し、Tailwindのユーティリティクラスから参照する
- ノブのサイズ違い・メーターのレベル違い・Bypassのオン/オフなど、状態バリエーションをストーリーとして網羅する
